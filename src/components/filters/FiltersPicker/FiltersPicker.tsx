import { Tooltip } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';
import { filterArray } from '@/lib/utils/filterArray';

import { DropdownPickerProps } from '@/types/dropdown.types';

type FiltersPickerProps = Omit<DropdownPickerProps, 'variant'>;

export default function FiltersPicker({
  dropdownItems,
  handlePick = () => void 1,
}: FiltersPickerProps) {
  const [pick, setPick] = useState<string[]>([]);

  const handlePicker = (pick: string) => {
    setPick((prev) => filterArray(prev, pick));
  };

  useEffect(() => {
    handlePick(pick);
  }, [pick, handlePick]);

  return (
    <div className='rounded-xl bg-[#0B0B13] py-2 px-3'>
      <div className='flex w-full flex-wrap gap-3 xl:max-w-xs'>
        {dropdownItems.map(
          ({ id, title, description }, index) =>
            id != undefined && (
              <Tooltip
                key={`${id}-${title}-${index}`}
                label={description}
                withArrow
                transition='pop'
                transitionDuration={300}
                openDelay={600}
                radius='lg'
                className='grow text-center'
              >
                <div onClick={() => handlePicker(id)}>
                  <div
                    className={clsxm(
                      'cursor-pointer rounded-full border-2 border-solid  bg-[#060606] px-4 py-1 text-lg text-white xl:text-md',

                      pick?.includes(id)
                        ? 'border-[#F8F8FF]'
                        : 'border-[#5c5c5c]'
                    )}
                  >
                    {title}
                  </div>
                </div>
              </Tooltip>
            )
        )}
      </div>
    </div>
  );
}
