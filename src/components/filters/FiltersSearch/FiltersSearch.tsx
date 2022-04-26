import { motion } from 'framer-motion';
import React from 'react';

type ItemsPosition = 'rtl' | 'ltr';

import { Input } from '@mantine/core';
import { useHover } from '@mantine/hooks';

import clsxm from '@/lib/clsxm';

import SearchIcon from '@/components/icons/SearchIcon';

import { IconProps } from '@/types/icon.types';

interface FiltersSearchProps {
  query: string;
  handleSearch?: (query: string) => void;
  buttonRef?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  animateIcon?: boolean;
  itemsPosition?: ItemsPosition;
  Icon?: React.ComponentType<IconProps>;
  className?: string;
}

export default function FiltersSearch({
  query,
  handleSearch = () => void 1,
  className,
  Icon = SearchIcon,
  animateIcon = true,
  itemsPosition = 'ltr',
}: FiltersSearchProps) {
  const { hovered, ref: hoveredRef } = useHover();

  return (
    <motion.div
      className={clsxm(
        'rounded-corners-gradient-borders cursor-pointer rounded-2xl border-0',
        className
      )}
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
            size={28}
            color='white'
            animate={animateIcon}
            animationState={hovered}
          />
        </motion.span>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleSearch(e.target.value);
          }}
          variant='unstyled'
          placeholder='Search...'
          value={query}
          className={clsxm(
            'bg-[#0B0B13] font-primary text-xl font-semibold text-white',
            itemsPosition == 'rtl' ? 'order-2' : 'order-1'
          )}
          styles={{
            input: {
              fontSize: '1.25rem',
              lineHeight: 0,
              height: '100%',
              minHeight: 0,
              color: '#F8F8FF',
              fontWeight: 600,
            },
          }}
        />
      </div>
    </motion.div>
  );
}
