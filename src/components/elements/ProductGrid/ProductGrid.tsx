import { SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import React from 'react';

import Product from '@/components/elements/Product/Product';

import { itemsMobileAnimation } from './ProductGrid.animations';

import { IProduct } from '@/types/product.types';

interface ProductGridItemProps extends IProduct {
  index: number;
}

const ProductGridItem = ({
  id,
  slug,
  name,
  image,
  description,
  price,
  hasDiscount,
  index,
}: ProductGridItemProps) => {
  return (
    <motion.div
      initial='hidden'
      variants={itemsMobileAnimation}
      animate='show'
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        type: 'spring',
        damping: 13,
        stiffness: 150,
      }}
      className='mb-5 flex justify-center md:mb-14'
      key={`product-${id}-${index}`}
    >
      <Product
        id={id}
        slug={slug}
        image={image}
        name={name}
        description={description}
        price={price}
        hasDiscount={hasDiscount}
      />
    </motion.div>
  );
};

const ProductGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 767, cols: 2, spacing: 'xs' },
        { maxWidth: 1024, cols: 3, spacing: 'sm' },
        { minWidth: 1280, cols: 4, spacing: 'lg' },
      ]}
    >
      {children}
    </SimpleGrid>
  );
};

ProductGrid.Item = ProductGridItem;
export default ProductGrid;
