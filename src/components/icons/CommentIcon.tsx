import { motion } from 'framer-motion';
import React from 'react';

import { IconProps } from '@/types/icon.types';

export default function CommentIcon({
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
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.66667 11.6666H5.29798L2.72347 13.7777C2.01169 14.3614 0.961541 14.2575 0.377887 13.5458C0.133538 13.2478 0 12.8743 0 12.489V4.99998C0 2.69879 1.86548 0.833313 4.16667 0.833313H9.16667C11.4679 0.833313 13.3333 2.69879 13.3333 4.99998V5.83331H15.8333C18.1345 5.83331 20 7.69879 20 9.99998V17.489C20 17.8743 19.8665 18.2478 19.6221 18.5458C19.0385 19.2575 17.9883 19.3614 17.2765 18.7777L14.702 16.6666H10.8333C8.53215 16.6666 6.66667 14.8012 6.66667 12.5V11.6666ZM6.66667 9.99998C6.66667 7.69879 8.53215 5.83331 10.8333 5.83331H11.6667V4.99998C11.6667 3.61927 10.5474 2.49998 9.16667 2.49998H4.16667C2.78595 2.49998 1.66667 3.61927 1.66667 4.99998V12.489L4.70202 9.99998H6.66667ZM10.8333 7.49998C9.45262 7.49998 8.33333 8.61927 8.33333 9.99998V12.5C8.33333 13.8807 9.45262 15 10.8333 15H15.298L18.3333 17.489V9.99998C18.3333 8.61927 17.214 7.49998 15.8333 7.49998H10.8333Z'
          fill={color}
        />
      </svg>
    </motion.div>
  );
}
