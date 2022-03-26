import { SimpleGrid } from '@mantine/core';
import React from 'react';

import Product from '@/components/Product/Product';

import ProductProps from '@/types/product.types';

interface ProductGridProps {
  items: ProductProps[];
}

export default function ProductGrid({ items }: ProductGridProps) {
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 768, cols: 2, spacing: 'xs' },
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
          <div className='mb-5 md:mb-14' key={`product-${id}-${index}`}>
            <Product
              id={id}
              name={name}
              description={description}
              price={price}
              currencySign={currencySign}
              hasDiscount={hasDiscount}
              lastPrice={lastPrice}
            />
          </div>
        )
      )}
    </SimpleGrid>
  );
}
