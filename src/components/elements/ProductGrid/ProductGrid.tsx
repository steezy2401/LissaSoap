import { SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import React from 'react';

import Product from '@/components/elements/Product/Product';

import { itemsAnimation, itemsMobileAnimation } from './ProductGrid.animations';

import ProductProps from '@/types/product.types';

interface ProductGridProps {
  items: ProductProps[];
}

export default function ProductGrid({ items }: ProductGridProps) {
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 767, cols: 2, spacing: 'xs' },
        { maxWidth: 1024, cols: 3, spacing: 'sm' },
        { minWidth: 1280, cols: 4, spacing: 'lg' },
      ]}
    >
      {items.map(
        (
          {
            id,
            name,
            description,
            price,
            currencySign,
            hasDiscount,
            lastPrice,
          },
          index
        ) => (
          <motion.div
            initial='hidden'
            variants={matches ? itemsMobileAnimation : itemsAnimation}
            animate='show'
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              type: 'spring',
              damping: 13,
              stiffness: 150,
            }}
            className='mb-5 md:mb-14'
            key={`product-${id}-${index}`}
          >
            <Product
              id={id}
              name={name}
              description={description}
              price={price}
              currencySign={currencySign}
              hasDiscount={hasDiscount}
              lastPrice={lastPrice}
            />
          </motion.div>
        )
      )}
    </SimpleGrid>
  );
}
