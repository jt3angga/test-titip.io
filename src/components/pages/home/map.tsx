import { useAppDispatch, useAppSelector } from "@/hooks";
import { useGetCoordinatesQuery } from "@/services";
import { mapSelector } from "@/store/slices";
import { setDataSource, setMapViewState } from "@/store/slices/mapSlice";
import bbox from "@turf/bbox";
import { FlyToOptions } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import ReactMapGl, { Layer, LayerProps, MapRef, Marker, Source } from 'react-map-gl';

export function Map() {
    const selectedMap = useAppSelector(mapSelector);
    const dispatch = useAppDispatch();
    const mapRef = useRef<MapRef>(null);

    const {
        data, isError, error
    } = useGetCoordinatesQuery(
        selectedMap.selectedPorts || [], {
        skip: !selectedMap.selectedPorts || selectedMap.selectedPorts.length < 2
    });

    useEffect(() => {
        if (isError) {
            if ('status' in error) {
                alert(`ERROR Fetching searoutes: ${error.status} - ${JSON.stringify(error.data) || "error"}`)
            } else {
                alert(`ERROR Fetching searoutes`)
            }
        }
    }, [error, isError])

    useEffect(() => {
        if (selectedMap.selectedPorts?.length === 1) {
            const coord = selectedMap.selectedPorts[0].geometry;
            const targetFlyTo = {
                center: [coord.coordinates[0], coord.coordinates[1]], zoom: 11, speed: 1, bearing: 0, pitch: 0,

            } as FlyToOptions;
            mapRef.current?.flyTo(targetFlyTo);
        }
    }, [selectedMap.selectedPorts]);

    useEffect(() => {
        if (data) {
            dispatch(setDataSource(data));
        }
    }, [data, dispatch])

    useEffect(() => {
        const coordinates = selectedMap.dataSource?.features[0].geometry.coordinates;

        if (coordinates) {
            const [minLng, minLat, maxLng, maxLat] = bbox(selectedMap.dataSource);

            mapRef.current?.fitBounds(
                [
                    [minLng, minLat],
                    [maxLng, maxLat]
                ],
                { padding: 40, duration: 1000 }
            );
        }
    }, [selectedMap.dataSource])

    return (
        <ReactMapGl
            ref={mapRef}
            {...selectedMap.viewState}
            onMove={evt => dispatch(setMapViewState(evt.viewState))}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOK_ACCESS_TOKEN}
            mapStyle={selectedMap.mapStyle}
            style={{ width: '100vw', height: '100vh' }}
        >
            {selectedMap?.selectedPorts?.map((p, i) => {
                const coordinate = p.geometry.coordinates;
                return (
                    <Marker
                        key={`marker-${i}-${coordinate[0]}-${coordinate[1]}`}
                        latitude={coordinate[1]}
                        longitude={coordinate[0]}
                        color="red"
                    />
                )
            })}
            {selectedMap.dataSource ? <Source id="route" type="geojson" data={selectedMap.dataSource}>
                <Layer {...lineLayer} />
            </Source> : null}
        </ReactMapGl>
    )
}

const lineLayer: LayerProps = {
    id: 'lineLayer',
    type: 'line',
    source: 'route',
    layout: {
        'line-join': 'round',
        'line-cap': 'round',
    },
    paint: {
        'line-color': '#556ae2',
        'line-width': 4
    }
}