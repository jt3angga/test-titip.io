import { useAppDispatch, useAppSelector } from "@/hooks";
import { Feature } from "@/services";
import { mapSelector } from "@/store/slices";
import { setSelectedPort } from "@/store/slices/mapSlice";
import { useState } from "react";
import { SearchInput } from "..";
import { DetailPlan } from "../detail-plan";

export function Sidebar() {
    const dispatch = useAppDispatch()
    const selectedMap = useAppSelector(mapSelector);

    const [rows, setRows] = useState<string[]>([""]);

    function handleCloseClick(index: number) {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);

        const ports = selectedMap.selectedPorts ? [...selectedMap.selectedPorts] : [];
        ports.splice(index, 1);
        dispatch(setSelectedPort(ports));
    }

    function onSelectPort(row: Feature, index: number) {
        const ports = selectedMap.selectedPorts ? [...selectedMap.selectedPorts] : [];
        if (typeof ports[index] === 'undefined') {
            ports.splice(index, 0, row);
        } else {
            ports[index] = row;
        }
        const newRows = [...rows];
        newRows[index] = row.properties.name;
        setRows(newRows);
        dispatch(setSelectedPort(ports));
    }

    function handleAdd() {
        const newRows = [...rows];
        newRows.push("");
        setRows(newRows);
    }

    return (
        <div className="relative bg-white shadow-3xl  md:h-screen max-w-[400px] w-full md:w-[400px]">
            <div className="bg-blue-500 p-4">
                {rows.map((value, i) => (
                    <SearchInput
                        key={`input-${i}`}
                        index={i}
                        onSelectPort={onSelectPort}
                        onCloseClick={handleCloseClick}
                        placeholder={i === 0 ? 'Choose Starting Point' : 'Choose Destination'}
                        withClose={rows.length > 1}
                        mapIcon={rows.length === i + 1}
                    />
                ))}
                {rows.length < 5 && !rows.some((str) => str === '') ? (
                    <div
                        onClick={handleAdd}
                        className="
                            text-center mt-2 text-white cursor-pointer bg-blue-600 hover:bg-blue-700
                            text-sm rounded-xl py-2 px-2 shadow-sm
                        "
                    >
                        Add Destination
                    </div>
                ) : null}
            </div>
            <DetailPlan />
        </div>
    )
}
