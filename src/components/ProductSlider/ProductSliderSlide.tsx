import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import React from 'react';

import {
  itemsAnimation,
  itemsMobileAnimation,
} from './ProductSliderSlide.animations';
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
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <motion.div
      initial='hidden'
      variants={matches ? itemsMobileAnimation : itemsAnimation}
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
