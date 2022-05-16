import { ColorSwatch, Tooltip } from '@mantine/core';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { IDropdownItems } from '@/types/dropdown.types';

interface ColorItemProps {
  item: IDropdownItems;
  handlePick: () => void;
  active: boolean;
}

export default function FiltersColorItem({
  item,
  handlePick = () => void 1,
  active = false,
}: ColorItemProps) {
  return (
    <Tooltip
      label={item.description}
      withArrow
      transition='pop'
      transitionDuration={300}
      openDelay={600}
      radius='lg'
      className='text-center'
    >
      <div onClick={handlePick}>
        <div
          className={clsxm(
            `cursor-pointer rounded-full border-2 border-solid border-transparent p-1`,
            active ? 'border-white' : ''
          )}
        >
          {item.color != undefined && (
            <ColorSwatch key={item.color} color={item.color} size={35} />
          )}
        </div>
      </div>
    </Tooltip>
  );
}
