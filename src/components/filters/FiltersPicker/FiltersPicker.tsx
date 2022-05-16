import { Tooltip } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';
import { filterArray } from '@/lib/utils/filterArray';

import { DropdownPickerProps, TPick } from '@/types/dropdown.types';

export default function FiltersPicker({
  dropdownItems,
  handlePick = () => void 1,
  defaultPick = [],
}: DropdownPickerProps) {
  const [pick, setPick] = useState<TPick[]>(defaultPick);

  const handlePicker = (pick: TPick) => {
    setPick((prev) => filterArray<TPick>(prev, pick));
  };

  useEffect(() => {
    handlePick(pick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pick]);

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
                <div onClick={() => handlePicker({ id, title })}>
                  <div
                    className={clsxm(
                      'cursor-pointer rounded-full border-2 border-solid  bg-[#060606] px-4 py-1 text-lg text-white xl:text-md',

                      pick?.some((e) => e.id === id)
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
