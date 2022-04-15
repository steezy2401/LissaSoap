import { Tooltip } from '@mantine/core';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { DropdownPickerProps } from '@/types/dropdown.types';

type FiltersPickerProps = Omit<DropdownPickerProps, 'variant'>;

export default function FiltersPicker({
  dropdownItems,
  handlePick = () => void 1,
  activeItems = undefined,
}: FiltersPickerProps) {
  return (
    <div className='rounded-xl bg-[#0B0B13] py-2 px-3'>
      <div className='flex max-w-xs flex-wrap gap-3'>
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
                <div onClick={() => handlePick(id)}>
                  <div
                    className={clsxm(
                      'cursor-pointer rounded-full border-2 border-solid  bg-[#060606] px-4 py-1 text-white',

                      activeItems?.includes(id)
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
