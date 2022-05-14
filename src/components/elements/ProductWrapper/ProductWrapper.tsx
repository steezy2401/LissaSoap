import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0,
    },
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
  },
};

const ProductWrapper = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial='hidden'
      variants={variants}
      animate='show'
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        type: 'spring',
        damping: 13,
        stiffness: 150,
      }}
      className='mb-5 flex justify-center md:mb-14'
      key={`product-${index}`}
    >
      {children}
    </motion.div>
  );
};

export default ProductWrapper;
