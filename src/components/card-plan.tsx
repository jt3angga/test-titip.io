import { useAppSelector } from '@/hooks';
import { mapSelector } from '@/store';
import { msToDays } from '@/utils/ms-to-days';
import Image from 'next/image';

export function CardPlan({
  handleOnClick,
}: {
  handleOnClick: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const selectedMap = useAppSelector(mapSelector);
  const ports = selectedMap.selectedPorts;
  const dataSource = selectedMap.dataSource;

  return dataSource && ports && ports.length > 1 ? (
    <div
      onClick={handleOnClick}
      className="
                    md:mt-5 md:mx-3 py-4 px-3 md:p-3 shadow-lg rounded-lg md:border-l-blue-500 md:border-l-4 cursor-pointer
                "
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-sm">{ports[0].properties.locode}</div>
          <div className="text-xs">{ports[0].properties.name}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-xs mb-[2px]">
            {msToDays(dataSource.properties.duration)}
          </div>
          <div className="flex flex-row justify-center">
            {dataSource.features.map((p, i) => (
              <div
                key={`images-${p.properties.duration}-${i}`}
                className="px-[2px]"
              >
                <Image
                  alt="Ship Icon"
                  src="./images/ship.svg"
                  width={16}
                  height={16}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-right">
            {ports[ports.length - 1].properties.locode}
          </div>
          <div className="text-xs text-right">
            {ports[ports.length - 1].properties.name}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
