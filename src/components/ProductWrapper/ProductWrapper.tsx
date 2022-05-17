import { motion } from 'framer-motion';
import React from 'react';

import motionVars from './ProductWrapper.motion';

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
      variants={motionVars}
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
