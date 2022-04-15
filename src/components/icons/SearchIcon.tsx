import { motion } from 'framer-motion';
import React from 'react';

import { IconProps } from '@/types/icon.types';

export default function SearchIcon({ size = 27, color = 'white' }: IconProps) {
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
      variants={variants}
      viewBox='0 0 39 39'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25.3693 23.3806C24.8201 22.8315 23.9297 22.8315 23.3806 23.3806C22.8314 23.9298 22.8314 24.8202 23.3806 25.3694L25.3693 23.3806ZM33.1306 35.1194C33.6797 35.6685 34.5701 35.6685 35.1193 35.1194C35.6685 34.5702 35.6685 33.6798 35.1193 33.1306L33.1306 35.1194ZM16.2499 26.2187C10.7444 26.2187 6.28119 21.7556 6.28119 16.25H3.46869C3.46869 23.3089 9.19105 29.0312 16.2499 29.0312V26.2187ZM26.2187 16.25C26.2187 21.7556 21.7555 26.2187 16.2499 26.2187V29.0312C23.3088 29.0312 29.0312 23.3089 29.0312 16.25H26.2187ZM16.2499 6.28125C21.7555 6.28125 26.2187 10.7444 26.2187 16.25H29.0312C29.0312 9.19111 23.3088 3.46875 16.2499 3.46875V6.28125ZM16.2499 3.46875C9.19105 3.46875 3.46869 9.19111 3.46869 16.25H6.28119C6.28119 10.7444 10.7444 6.28125 16.2499 6.28125V3.46875ZM23.3806 25.3694L33.1306 35.1194L35.1193 33.1306L25.3693 23.3806L23.3806 25.3694Z'
        fill={color}
      />
    </motion.svg>
  );
}
