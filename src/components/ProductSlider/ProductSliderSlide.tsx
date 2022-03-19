import { motion } from 'framer-motion';
import React from 'react';

import Product from '../Product/Product';

import ProductProps from '@/types/typesProduct';

export default function ProductSliderSlide({
  active,
  item,
}: {
  active: boolean;
  item: ProductProps;
}) {
  const items = {
    hidden: {
      x: 150,
      transition: {
        duration: 0.4,
      },
    },
    show: {
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      initial='hidden'
      variants={items}
      animate={active ? 'show' : 'hidden'}
    >
      <Product
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
