import { ColorSwatch, Tooltip } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';
import { filterArray } from '@/lib/utils/filterArray';

import { DropdownPickerProps, TPick } from '@/types/dropdown.types';

type FiltersPickerProps = Omit<DropdownPickerProps, 'variant'>;

export default function FiltersColor({
  dropdownItems,
  handlePick = () => void 1,
  defaultPick = [],
}: FiltersPickerProps) {
  const [pick, setPick] = useState<TPick[]>(defaultPick);

  const handlePicker = (pick: TPick) => {
    setPick((prev) => filterArray<TPick>(prev, pick));
  };

  useEffect(() => {
    handlePick(pick);
  }, [pick, handlePick]);

  return (
    <div className='rounded-xl bg-[#0B0B13] py-2 px-3'>
      <div className='flex max-w-xs flex-wrap gap-1'>
        {dropdownItems.map(
          ({ id, color, description }, index) =>
            id != undefined && (
              <Tooltip
                key={`${id}-${color}-${index}`}
                label={description}
                withArrow
                transition='pop'
                transitionDuration={300}
                openDelay={600}
                radius='lg'
                className='text-center'
              >
                <div onClick={() => handlePicker({ id, title: description })}>
                  <div
                    className={clsxm(
                      `cursor-pointer rounded-full border-2 border-solid border-transparent p-1`,
                      pick?.some((e) => e.id === id) ? 'border-white' : ''
                    )}
                  >
                    {color != undefined && (
                      <ColorSwatch key={color} color={color} size={35} />
                    )}
                  </div>
                </div>
              </Tooltip>
            )
        )}
      </div>
    </div>
  );
}
