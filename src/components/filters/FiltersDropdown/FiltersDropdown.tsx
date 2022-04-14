import { useClickOutside, useDisclosure } from '@mantine/hooks';
import React from 'react';

import clsxm from '@/lib/clsxm';

import FiltersDropdownField from '@/components/filters/FiltersDropdownField/FiltersDropdownField';
import FiltersPicker from '@/components/filters/FiltersPicker/FiltersPicker';
import FiltersRange from '@/components/filters/FiltersRange/FiltersRange';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';

import FiltersButton from '../FiltersButton/FiltersButton';
import FiltersColor from '../FiltersColor/FiltersColor';

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
        {props.children}
      </FiltersButton>
      <FiltersDropdownField
        state={dropdownOpened}
        dropdownHandlers={dropdownHandlers}
      >
        {props.variant == 'picker' && (
          <FiltersPicker
            dropdownItems={props.dropdownItems}
            handlePick={props.handlePick}
            activeItems={props.activeItems}
          />
        )}
        {props.variant == 'color' && (
          <FiltersColor
            dropdownItems={props.dropdownItems}
            handlePick={props.handlePick}
            activeItems={props.activeItems}
          />
        )}
        {props.variant == 'range' && (
          <FiltersRange range={props.range} handlePick={props.handlePick} />
        )}
      </FiltersDropdownField>
    </div>
  );
};

export default FiltersDropdown;
