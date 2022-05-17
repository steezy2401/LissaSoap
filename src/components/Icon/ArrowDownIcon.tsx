import { motion } from 'framer-motion';
import React from 'react';

import { IconProps } from '@/types/icon.types';

export default function ArrowDownIcon({
  size = 27,
  color = 'white',
  animate = true,
  animationState = false,
}: IconProps) {
  const variants = {
    idle: { y: 0, transition: { duration: 1.2 } },
    hover: {
      y: [0, 3, 0],
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 2,
        stiffness: 150,
        repeat: 1,
      },
    },
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial='idle'
      animate={animate ? (animationState ? 'hover' : '') : ''}
      variants={variants}
    >
      <path
        d='M19 8.5L12 15.5L5 8.5'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </motion.svg>
  );
}
