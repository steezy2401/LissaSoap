import { motion } from 'framer-motion';
import React from 'react';

import { IconProps } from '@/types/icon.types';

export default function RularIcon({
  size = 10,
  color = 'white',
  animate = true,
  animationState = false,
}: IconProps) {
  const variants = {
    idle: { rotate: 0, transition: { duration: 1.2 } },
    hover: {
      rotate: 120,
      transition: { duration: 1.2 },
    },
  };

  return (
    <motion.div
      initial='idle'
      animate={animate ? (animationState ? 'hover' : '') : ''}
      variants={variants}
      transition={{ duration: 1.2 }}
      className='flex justify-center'
    >
      <svg
        width={size}
        height={size}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_534_39)'>
          <rect
            x='1.06066'
            y='13.9721'
            width='18.2595'
            height='7.27985'
            rx='2.25'
            transform='rotate(-45 1.06066 13.9721)'
            stroke={color}
            strokeWidth='1.5'
          />
          <rect
            x='8.80798'
            y='5.71429'
            width='3.42857'
            height='1.14286'
            rx='0.571428'
            transform='rotate(45 8.80798 5.71429)'
            fill='white'
          />
          <rect
            x='11.0938'
            y='3.42856'
            width='3.42857'
            height='1.14286'
            rx='0.571429'
            transform='rotate(45 11.0938 3.42856)'
            fill='white'
          />
          <rect
            x='4.23657'
            y='10.2857'
            width='3.42857'
            height='1.14286'
            rx='0.571429'
            transform='rotate(45 4.23657 10.2857)'
            fill='white'
          />
          <rect
            x='6.52234'
            y='8'
            width='3.42857'
            height='1.14286'
            rx='0.571429'
            transform='rotate(45 6.52234 8)'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_534_39'>
            <rect width='20' height='20' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}
