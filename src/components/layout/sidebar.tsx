import { useAppDispatch, useAppSelector } from "@/hooks";
import { Feature } from "@/services";
import { mapSelector } from "@/store/slices";
import { setSelectedPort } from "@/store/slices/mapSlice";
import { useState } from "react";
import { SearchInput } from "..";

export function Sidebar() {
    const dispatch = useAppDispatch()
    const selectedMap = useAppSelector(mapSelector);

    const [rows, setRows] = useState<string[]>(["", ""]);

    function handleCloseClick(index: number) {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);

        const geometries = selectedMap.selectedPorts ? [...selectedMap.selectedPorts] : [];
        geometries.splice(index, 1);
        dispatch(setSelectedPort(geometries));
    }

    function onSelectPort(row: Feature, index: number) {
        const geometries = selectedMap.selectedPorts ? [...selectedMap.selectedPorts] : [];
        if (typeof geometries[index] === 'undefined') {
            geometries.splice(index, 0, row.geometry);
        } else {
            geometries[index] = row.geometry;
        }
        const newRows = [...rows];
        newRows[index] = row.properties.name;
        setRows(newRows);
        dispatch(setSelectedPort(geometries));
    }

    function handleAdd() {
        const newRows = [...rows];
        newRows.push("");
        setRows(newRows);
    }

    return (
        <div className="bg-white shadow-3xl  md:h-screen max-w-[400px] w-full md:w-[400px]">
            <div className="bg-blue-500 p-4">
                {rows.map((value, i) => (
                    <SearchInput
                        key={`input-${i}`}
                        index={i}
                        onSelectPort={onSelectPort}
                        onCloseClick={handleCloseClick}
                        placeholder={i === 0 ? 'Choose Starting Point' : 'Choose Destination'}
                        withClose={rows.length > 2}
                    />
                ))}
                {rows.length < 5 && !rows.some((str) => str === '') ? (
                    <div
                        onClick={handleAdd}
                        className="
                            text-center mt-4 text-white cursor-pointer bg-blue-600 hover:bg-blue-700
                            text-sm rounded-xl py-2 px-2 shadow-sm
                        "
                    >
                        Add Destination
                    </div>
                ) : null}
            </div>
        </div>
    )
}