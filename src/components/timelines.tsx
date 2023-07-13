import { useAppSelector } from "@/hooks";
import { mapSelector } from "@/store";
import { msToDays } from "@/utils/ms-to-days";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function Timelines() {
    const selectedMap = useAppSelector(mapSelector);
    const ports = selectedMap.selectedPorts;
    const dataSource = selectedMap.dataSource

    return (
        dataSource?.features?.map((row, i) => {
            return (
                <div
                    key={`port-${row.properties.duration}-${i}`}
                    className="relative"
                >
                    <div className="absolute left-[50%] border-l-[1px] border-l-gray-300 top-0 bottom-0 w-6" >
                        <div className="ml-[-12px] rounded-full bg-white">
                            <Image
                                alt="Ship Icon"
                                src="./images/ship.svg"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="absolute bottom-0 left-[-12px] bg-white"><CheckBadgeIcon className="w-6 h-6 text-center" /></div>
                    </div>
                    <div
                        className="relative flex flex-row justify-between items-center px-3 my-12 h-28"
                    >
                        <div className="flex justify-center text-xs text-center text-gray-500">
                            {msToDays(row.properties.duration ?? 0)}
                        </div>
                        <div className="flex flex-col justify-between h-full items-end">
                            <div className="text-sm text-gray-500">{ports && ports[i] && ports[i].properties.name}</div>
                            <div className="text-sm  text-gray-500">{ports && ports[i + 1] && ports[i + 1].properties.name}</div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}