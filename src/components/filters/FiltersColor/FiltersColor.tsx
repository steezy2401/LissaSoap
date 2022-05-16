import React, { useEffect, useState } from 'react';

import { filterArray } from '@/lib/utils/filterArray';

import FiltersColorItem from './FiltersColorItem';

import { DropdownPickerProps, TPick } from '@/types/dropdown.types';

export default function FiltersColor({
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
      <div className='flex max-w-xs flex-wrap gap-1'>
        {dropdownItems.map(
          ({ id, color, description }, index) =>
            id != undefined && (
              <FiltersColorItem
                key={`${id}-${color}-${index}`}
                item={{ id, color, description }}
                handlePick={() => handlePicker({ id, title: description })}
                active={pick?.some((e) => e.id === id)}
              />
            )
        )}
      </div>
    </div>
  );
}
