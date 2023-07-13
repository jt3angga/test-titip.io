import { Input, InputProps } from '@/elements';
import { useDebounce } from '@/hooks/use-debounce';
import { Feature } from '@/services/ports/port-model';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ChangeEvent, useRef, useState } from 'react';
import { Suggestion } from './suggestion';

export type SearchInputProps = InputProps & {
    index: number;
    onCloseClick: (index: number) => void;
    onSelectPort: (row: Feature, index: number) => void;
    withClose?: boolean;
    mapIcon?: boolean
}

export function SearchInput({ index, withClose, mapIcon, onCloseClick, onSelectPort, ...rest }: SearchInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleClick = (row: Feature) => {
        setInputValue(row.properties.name);
        onSelectPort(row, index);
    };

    return (
        <div className='relative'>
            <div className='flex flex-row items-center justify-between py-2'>
                <div className='mr-2 w-4'>
                    {mapIcon ?
                        <div className="absolute left-[-3px] top-[14px]"><MapPinIcon className='w-4 h-4 text-white' /></div> :
                        <div className='relative'>
                            <div className="w-2 h-2 bg-white rounded-full left-1 border border-white" />
                            <div className='absolute left-[4px] top-3 md:top-4 border-l-[1px] h-6' />
                        </div>
                    }
                </div>
                <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    {...rest}
                />
                <div className='ml-2'>
                    {withClose ? (
                        <div className='cursor-pointer' onClick={() => onCloseClick(index)}>
                            <XMarkIcon
                                className='text-gray-200 w-[24px] h-[24px] hover:text-white'
                            />
                        </div>
                    ) : null}
                </div>
            </div>
            <Suggestion
                onClick={handleClick}
                value={debouncedValue}
                inputRef={inputRef}
            />
        </div>
    );
}
