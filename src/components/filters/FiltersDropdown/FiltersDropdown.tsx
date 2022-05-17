import { useClickOutside, useDisclosure } from '@mantine/hooks';
import React from 'react';

import clsxm from '@/lib/clsxm';

import FiltersButton from '@/components/filters/FiltersButton';
import ArrowDownIcon from '@/components/Icon/ArrowDownIcon';

import FiltersDropdownField from './Field/Field';

import { DropdownProps } from '@/types/dropdown.types';

const FiltersDropdown = (props: DropdownProps) => {
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);

  const Icon = (props.Icon && props.Icon) || ArrowDownIcon;
  const itemsPosition = (props.itemsPosition && props.itemsPosition) || 'ltr';

  const ref = useClickOutside(() => dropdownHandlers.close());

  return (
    <div ref={ref} className={clsxm('relative', props.className)}>
      <FiltersButton
        Icon={Icon}
        itemsPosition={itemsPosition}
        onClick={() => dropdownHandlers.toggle()}
      >
        {props.label}
      </FiltersButton>
      <FiltersDropdownField
        state={dropdownOpened}
        dropdownHandlers={dropdownHandlers}
      >
        {props.children}
      </FiltersDropdownField>
    </div>
  );
};

export default FiltersDropdown;
