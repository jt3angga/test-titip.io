import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { CardPlan } from "./card-plan";
import { Timelines } from "./timelines";

export function DetailPlan() {
    const [showTimeline, setShowTimeline] = useState<boolean>(false);
    return (
        <div className={
            showTimeline ? "absolute bg-white z-10 left-0 right-0 top-0" : ""
        }>
            {showTimeline ? (
                <div className="bg-blue-500 px-3 py-3 flex flex-row items-center">
                    <ChevronLeftIcon className="text-white w-[28px] h-[28px] cursor-pointer" onClick={() => setShowTimeline(false)} />
                    <div className="text-white ml-3">Back</div>
                </div>
            ) : null}
            <CardPlan handleOnClick={() => setShowTimeline(prev => !prev)} />
            {showTimeline ? (
                <div className="overflow-y-auto py-4  mt-0 max-h-[calc(100vh-132px)]">
                    <Timelines />
                </div>
            ) : null}
        </div>
    )
}