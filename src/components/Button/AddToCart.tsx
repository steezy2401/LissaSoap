import { motion } from 'framer-motion';
import React from 'react';

export default function AddToCart({
  state,
  action = () => void 0,
}: {
  state: boolean;
  action?: () => void;
}) {
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
      className='absolute left-0 -bottom-9 flex w-full cursor-pointer select-none justify-center'
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
