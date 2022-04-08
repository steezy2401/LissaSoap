import { useHover } from '@mantine/hooks';
import { motion } from 'framer-motion';
import React from 'react';
import { CgChevronDown } from 'react-icons/cg';

import clsxm from '@/lib/clsxm';

import {
  filterDropdownAnimations,
  FilterDropdownAnimationsTypes,
} from './fitlersDropdown.animations';

type ItemsPosition = 'rtl' | 'ltr';

interface DropdownProps extends React.ComponentPropsWithoutRef<'button'> {
  animateIcon: boolean;
  animationType: keyof typeof FilterDropdownAnimationsTypes;
  itemsPosition: ItemsPosition;
  icon?: JSX.Element;
}

const FiltersDropdown = ({
  className,
  disabled = false,
  children,
  onClick,
  icon = <CgChevronDown size={27} />,
  animateIcon = true,
  animationType = 'pullDown',
  itemsPosition = 'ltr',
}: DropdownProps) => {
  const { hovered, ref } = useHover();

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    click: {
      scale: 0.94,
    },
  };

  return (
    <motion.button
      disabled={disabled}
      initial='initial'
      whileTap='click'
      variants={buttonVariants}
      className='rounded-corners-gradient-borders cursor-pointer rounded-2xl border-0'
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      <div
        ref={ref}
        className={clsxm(
          'relative flex w-full gap-3 rounded-xl bg-[#0B0B13] py-2 pl-3 ',
          itemsPosition == 'rtl' ? 'pr-5' : 'pr-3',
          className
        )}
      >
        <motion.span
          initial='show'
          variants={animateIcon ? filterDropdownAnimations : {}}
          animate={hovered ? animationType : ''}
          className={clsxm(
            'leading-[0px] text-white',
            itemsPosition == 'rtl' ? 'order-1' : 'order-2'
          )}
        >
          {icon}
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
  );
};

export default FiltersDropdown;