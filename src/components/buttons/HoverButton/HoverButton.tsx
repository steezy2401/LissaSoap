import { motion } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { buttonVariants } from './HoverButton.motion';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  state: boolean;
}

const AddToCart = ({
  className,
  state,
  children,
  onClick = () => void 0,
}: ButtonProps) => {
  return (
    <motion.button
      initial='initial'
      whileHover='hover'
      whileTap='click'
      animate={state ? 'show' : 'initial'}
      variants={buttonVariants}
      className={clsxm(
        'button-shadow-default w-40 cursor-pointer rounded-md border-2 border-solid border-white bg-white p-2 text-center font-primary',
        className
      )}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick && onClick(e);
      }}
    >
      <span className='text-lg font-semibold text-black'>{children}</span>
    </motion.button>
  );
};

export default AddToCart;
