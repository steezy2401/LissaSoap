import { motion } from 'framer-motion';
import React from 'react';

import Product from '../Product/Product';

import ProductProps from '@/types/product.types';

export default function ProductSliderSlide({
  active,
  item,
  index,
}: {
  active: boolean;
  item: ProductProps;
  index: number;
}) {
  const items = {
    hidden: {
      x: 150,
      opacity: 0,
      transition: {
        duration: 0.4,
        delay: 0,
      },
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial='hidden'
      variants={items}
      animate={active ? 'show' : 'hidden'}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        type: 'spring',
        damping: 13,
        stiffness: 150,
      }}
    >
      <Product
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        currencySign={item.currencySign}
        hasDiscount={item.hasDiscount}
        lastPrice={item.lastPrice}
        discountPercent={item.discountPercent}
      />
    </motion.div>
  );
}
