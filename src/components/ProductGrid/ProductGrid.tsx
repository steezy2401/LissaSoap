import { SimpleGrid } from '@mantine/core';
import React from 'react';

import Product from '@/components/Product';
import ProductWrapper from '@/components/ProductWrapper';

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
    <ProductWrapper index={index}>
      <Product
        id={id}
        slug={slug}
        image={image}
        name={name}
        description={description}
        price={price}
        hasDiscount={hasDiscount}
      />
    </ProductWrapper>
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
