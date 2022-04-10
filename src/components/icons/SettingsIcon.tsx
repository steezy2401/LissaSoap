import { motion } from 'framer-motion';
import React from 'react';

import { IconProps } from '@/types/icon.types';

export default function SettingsIcon({
  size = 27,
  color = 'white',
  animate = true,
  animationState = false,
}: IconProps) {
  const variants = {
    idle: { pathLength: 1, rotate: 0, transition: { duration: 0.6 } },
    hover: (direction: 'up' | 'down') => {
      const rotateDeg = direction === 'up' ? [0, 65, -170] : [0, -120, 80];

      return {
        pathLength: 0.7,
        rotate: rotateDeg,
        transition: {
          pathLength: { type: 'spring', duration: 0.8, bounce: 0 },
          rotate: { duration: 2 },
        },
      };
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
      animate={animate ? (animationState ? 'hover' : 'idle') : ''}
    >
      <motion.path
        d='M10.3303 16.5929H4.02954'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        d='M13.1404 6.90038H19.4411'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.72629 6.84625C8.72629 5.5506 7.66813 4.5 6.36314 4.5C5.05816 4.5 4 5.5506 4 6.84625C4 8.14191 5.05816 9.19251 6.36314 9.19251C7.66813 9.19251 8.72629 8.14191 8.72629 6.84625Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        variants={variants}
        custom='up'
      />
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 16.5537C20 15.2581 18.9426 14.2075 17.6376 14.2075C16.3318 14.2075 15.2737 15.2581 15.2737 16.5537C15.2737 17.8494 16.3318 18.9 17.6376 18.9C18.9426 18.9 20 17.8494 20 16.5537Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        variants={variants}
        custom='down'
      />
    </motion.svg>
  );
}
