import { useHover } from '@mantine/hooks';
import { motion } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

import GearIcon from '@/components/icons/GearIcon';

import { IconProps } from '@/types/icon.types';

type ItemsPosition = 'rtl' | 'ltr';

type ButtonProps = {
  buttonRef?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  animateIcon?: boolean;
  itemsPosition?: ItemsPosition;
  Icon?: React.ComponentType<IconProps>;
} & React.ComponentPropsWithRef<'button'>;

const FiltersButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled = false,
      children,
      onClick,
      Icon = GearIcon,
      animateIcon = true,
      itemsPosition = 'rtl',
    },
    ref
  ) => {
    const { hovered, ref: hoveredRef } = useHover();

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
        ref={ref}
        disabled={disabled}
        initial='initial'
        whileTap='click'
        variants={buttonVariants}
        className={clsxm(
          'rounded-corners-gradient-borders cursor-pointer rounded-2xl border-0 p-0',
          className
        )}
        onClick={(e) => {
          onClick && onClick(e);
        }}
      >
        <div
          ref={hoveredRef}
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
    );
  }
);

export default FiltersButton;
