import { useHover } from '@mantine/hooks';
import { motion } from 'framer-motion';
import React from 'react';

import TabProps from '@/types/tab.types';

export default function Tab({
  title,
  showCounter = false,
  counter = 0,
  active = false,
  onClick = () => void 0,
}: TabProps) {
  const { hovered, ref } = useHover();

  const container = {
    hidden: { opacity: 0, scaleX: 0, transition: { duration: 0.2 } },
    show: {
      opacity: 1,
      transition: {
        staggerDirection: -1,
      },
      scaleX: 1,
    },
  };

  return (
    <div
      ref={ref}
      className='relative inline-block cursor-pointer select-none px-1 py-2 text-white'
      onClick={() => {
        onClick && onClick();
      }}
    >
      {showCounter && (
        <span className='absolute top-0 left-full text-sm font-bold md:text-md'>
          {counter}
        </span>
      )}
      <span className='block px-1 text-2xl font-bold md:text-3xl'>{title}</span>
      <motion.div
        variants={container}
        initial='hidden'
        animate={hovered || active ? 'show' : 'hidden'}
        className='border-bottom-gradient px-1 text-xl font-bold'
      ></motion.div>
    </div>
  );
}
