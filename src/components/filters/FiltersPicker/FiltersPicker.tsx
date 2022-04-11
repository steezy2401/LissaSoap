import { Tooltip } from '@mantine/core';
import React from 'react';

import FiltersPickerText from './FiltersPickerText';

import { IDropdownItems } from '@/types/dropdown.types';

interface FiltersPickerProps {
  dropdownItems: IDropdownItems[];
  handlePick?: (id?: string) => void;
  activeItem?: string;
}

export default function FiltersPicker({
  dropdownItems,
  handlePick = () => void 1,
  activeItem = undefined,
}: FiltersPickerProps) {
  return (
    <div className='rounded-xl bg-[#0B0B13] py-2 px-3'>
      <div className='flex max-w-xs flex-wrap gap-3'>
        {dropdownItems.map(({ id, title, description }, index) => (
          <Tooltip
            key={`${id}-${title}-${index}`}
            label={description}
            withArrow
            transition='pop'
            transitionDuration={300}
            openDelay={300}
            radius='lg'
            className='grow text-center'
          >
            <div onClick={() => handlePick(id)}>
              <FiltersPickerText isActive={activeItem === id} text={title} />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
