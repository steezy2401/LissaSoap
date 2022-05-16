import { motion } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { buttonVariants, containerVariants } from './AddToCart.motion';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  state: boolean;
  action?: () => void;
}

const AddToCart = ({
  className,
  state,
  action = () => void 0,
}: ButtonProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate={state ? 'show' : 'hidden'}
      className={clsxm(
        'hidden w-full cursor-pointer select-none justify-center sm:flex',
        className
      )}
      onClick={action}
    >
      <motion.div
        initial='initial'
        whileHover='hover'
        whileTap='click'
        variants={buttonVariants}
        className='button-shadow-default w-40 rounded-md border-2 border-solid border-white bg-white p-2 text-center'
      >
        <span className='text-lg font-semibold text-black'>Add to cart</span>
      </motion.div>
    </motion.div>
  );
};

export default AddToCart;
