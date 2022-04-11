import { useClickOutside, useDisclosure, useHover } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';

import FiltersPicker from '@/components/filters/FiltersPicker/FiltersPicker';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';

import { buttonVariants, dropdownVariants } from './FiltersDropdown.animations';

import { IDropdownItems, ItemsPosition } from '@/types/dropdown.types';
import { IconProps } from '@/types/icon.types';

interface DropdownProps extends React.ComponentPropsWithoutRef<'button'> {
  animateIcon?: boolean;
  Icon?: React.ComponentType<IconProps>;
  itemsPosition?: ItemsPosition;
  activeItem?: string;
  handlePick?: (id?: string) => void;
  dropdownItems: IDropdownItems[];
}

const FiltersDropdown = ({
  className,
  disabled = false,
  children,
  onClick,
  animateIcon = true,
  Icon = ArrowDownIcon,
  itemsPosition = 'ltr',
  activeItem = undefined,
  handlePick = () => void 1,
  dropdownItems,
}: DropdownProps) => {
  const [dropdown, setDropdown] = useState<HTMLElement | null>(
    {} as HTMLElement | null
  );
  const [control, setControl] = useState<HTMLElement | null>(
    {} as HTMLElement | null
  );
  const { hovered, ref } = useHover();
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  useClickOutside(() => dropdownHandlers.close(), null, [control!, dropdown!]);

  return (
    <div className={clsxm('relative', className)}>
      <motion.button
        ref={setControl}
        disabled={disabled}
        initial='initial'
        whileTap='click'
        variants={buttonVariants}
        className='rounded-corners-gradient-borders cursor-pointer rounded-2xl border-0'
        onClick={(e) => {
          dropdownHandlers.toggle();
          onClick && onClick(e);
        }}
      >
        <div
          ref={ref}
          className={clsxm(
            'relative flex w-full gap-3 rounded-xl bg-[#0B0B13] py-2 pl-3 ',
            itemsPosition == 'rtl' ? 'pr-5' : 'pr-3'
          )}
        >
          <motion.span
            className={clsxm(
              'leading-[0px] text-white',
              itemsPosition == 'rtl' ? 'order-1' : 'order-2'
            )}
          >
            <Icon
              size={27}
              color='white'
              animate={animateIcon}
              animationState={hovered}
            />
          </motion.span>
          <span
            className={clsxm(
              'font-primary text-xl font-semibold text-white',
              itemsPosition == 'rtl' ? 'order-2' : 'order-1'
            )}
          >
            {children}
          </span>
        </div>
      </motion.button>
      <AnimatePresence>
        {dropdownItems != undefined &&
          dropdownItems.length > 0 &&
          dropdownOpened && (
            <motion.div
              ref={setDropdown}
              className='rounded-corners-gradient-borders absolute top-[110%] mr-[-10000px] border-0'
              variants={dropdownVariants}
              initial='initial'
              animate='show'
              exit='hide'
            >
              <FiltersPicker
                dropdownItems={dropdownItems}
                handlePick={handlePick}
                activeItem={activeItem}
              />
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default FiltersDropdown;
