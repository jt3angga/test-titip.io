import { useGetPortsQuery } from "@/services/ports/port-api";
import { Feature } from "@/services/ports/port-model";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { RefObject, useEffect, useState } from "react";

export type SuggestionProps = {
    onClick: (row: Feature) => void,
    value: string,
    inputRef: RefObject<HTMLInputElement>
};

export function Suggestion({
    onClick,
    value,
    inputRef,
}: SuggestionProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Feature>();

    const {
        data,
        isLoading,
    } = useGetPortsQuery(
        value, {
        skip: !value || value.length < 3 || selectedRow?.properties.name === value
    });

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [inputRef]);

    const handleSuggestionClick = (row: Feature) => {
        setSelectedRow(row);
        onClick(row);
        setIsDropdownOpen(false);
    };
    useEffect(() => {
        if (data?.features.length) {
            setIsDropdownOpen(true)
        } else {
            setIsDropdownOpen(false)
        }
    }, [data]);

    if (isLoading) {
        return (
            <div
                className="mt-2 overflow-y-auto transition-all max-h-60 duration-300 bg-white shadow-md z-10"
                style={{
                    position: 'absolute',
                    top: inputRef.current ? inputRef.current.offsetTop + inputRef.current.offsetHeight : 'auto',
                    left: inputRef.current ? inputRef.current.offsetLeft : 'auto',
                    width: inputRef.current ? inputRef.current.offsetWidth : 'auto',
                }}
            >
                <div className="text-center p-2">
                    Loading...
                </div>
            </div>
        )
    }

    return (
        isDropdownOpen ? (
            <ul
                className="mt-2 overflow-y-auto transition-all max-h-60 duration-300 bg-white shadow-md z-10"
                style={{
                    position: 'absolute',
                    top: inputRef.current ? inputRef.current.offsetTop + inputRef.current.offsetHeight : 'auto',
                    left: inputRef.current ? inputRef.current.offsetLeft : 'auto',
                    width: inputRef.current ? inputRef.current.offsetWidth : 'auto',
                }}
            >
                {data?.features.map((row, index) => {
                    return (
                        <li
                            key={index}
                            className="border text-sm py-2 px-3 cursor-pointer hover:bg-gray-200 text-gray-700"
                            onClick={() => handleSuggestionClick(row)}
                        >
                            <div className="flex flex-row items-center justify-between">
                                <div>
                                    {`${row.properties.name}, ${row.properties.locode}`}
                                </div>
                                <MapPinIcon className="w-4 h-4" />
                            </div>
                        </li>
                    )
                })}
            </ul>
        ) : null
    )
}