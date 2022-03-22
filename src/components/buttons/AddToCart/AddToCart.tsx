import { motion } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

type AddToCartProps = {
  state: boolean;
  action?: () => void;
} & React.ComponentPropsWithRef<'button'>;

const AddToCart = React.forwardRef<HTMLButtonElement, AddToCartProps>(
  ({ className, state, action = () => void 0 }) => {
    const buttonVariants = {
      initial: {
        scale: 1,
      },
      hover: {
        scale: 1.05,
      },
      click: {
        scale: 0.95,
      },
    };

    const container = {
      hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
      show: {
        opacity: 1,
        transition: {
          staggerDirection: -1,
        },
        y: 0,
      },
    };

    return (
      <motion.div
        variants={container}
        initial='hidden'
        animate={state ? 'show' : 'hidden'}
        className={clsxm(
          'flex w-full cursor-pointer select-none justify-center',
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
  }
);

export default AddToCart;
