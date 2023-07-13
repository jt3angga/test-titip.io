import { Coordinate } from "@/store/slices/mapSlice";

export type LineStringCoordinate = [number, number];

export interface LineStringGeometry {
    type: string;
    coordinates: LineStringCoordinate[];
}

export interface Vessel {
    imo: number;
    name: string;
    length: number;
    width: number;
    maxDraft: number;
    draft: number;
}

export interface FeatureArea {
    type: string,
    properties: {
        id: 10810,
        name: string,
        alternatives: []
    },
    geometry: {
        type: string,
        coordinates: Coordinate
    }
}

export interface CoordinateProperties {
    departure: number;
    arrival: number;
    duration: number;
    speed: number;
    distance: number;
    secaIntersection: number;
    hraIntersection: number;
    intersectsIceArea: boolean;
    speedInKts: number;
    mode: string;
    vessel: Vessel;
    details: [];
    areas: {
        type: string;
        features: FeatureArea[];
    };
}

export interface CoordinateFeature {
    type: string;
    properties: CoordinateProperties;
    geometry: LineStringGeometry;
}

export interface CoordinatesResponse {
    type: string;
    features: CoordinateFeature[];
    properties: CoordinateProperties;
}