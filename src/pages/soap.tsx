import React, { useEffect, useState } from 'react';

import PageTitle from '@/components/elements/PageTitle/PageTitle';
import ProductGrid from '@/components/elements/ProductGrid/ProductGrid';
import FiltersBar from '@/components/filters/FiltersBar/FiltersBar';

import { fetchCollections } from '@/services/collections.services';
import { fetchColors } from '@/services/colors.services';
import { fetchFlavors } from '@/services/flavors.services';
import { fetchProducts } from '@/services/products.services';

import { FiltersBarProps } from '@/types/dropdown.types';
import { IFilters } from '@/types/filters.types';
import { IProductWithCover } from '@/types/product.types';

interface SoapPageProps {
  products: IProductWithCover[];
}

export default function SoapPage({
  products,
  flavors,
  collections,
  colors,
}: SoapPageProps & FiltersBarProps) {
  // Background setter
  useEffect(() => {
    document.body.classList.add('productsGradient');
    return () => {
      document.body.classList.remove('productsGradient');
    };
  }, []);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [filters, setFilters] = useState<IFilters>({} as IFilters);

  const handleFilters = (filters: IFilters) => {
    setFilters((prev) => ({ ...prev, filters }));
  };

  //TODO: Sort on filter change
  /*
  useEffect(() => {
    console.log(filters);
  }, [filters]);
  */

  return (
    <main className='layout'>
      <div className='mt-5'>
        <PageTitle title='Soap' />
      </div>
      <div className='mb-16 mt-24'>
        <FiltersBar
          handleFilters={handleFilters}
          flavors={flavors}
          collections={collections}
          colors={colors}
        />
      </div>
      <section className=''>
        {products.length > 0 ? (
          <ProductGrid>
            {products.map((item, key) => (
              <ProductGrid.Item
                key={`${item.id}-${item.slug}-${key}`}
                id={item.id}
                name={item.name}
                slug={item.slug}
                image={process.env.API_URL + item.coverImage.formats.small.url}
                description={item.description}
                price={item.price}
                hasDiscount={item.hasDiscount}
                index={key}
              />
            ))}
          </ProductGrid>
        ) : (
          <div className='flex h-[30vh] w-full items-start justify-center'>
            <span className='text-3xl'>No results...</span>
          </div>
        )}
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchProducts();

  if (products.status == 404) {
    return {
      notFound: true,
    };
  } else if (products.status == 500) {
    throw new TypeError('Oops, something went wrong ;(');
  }

  return {
    props: {
      products: products.data,
      flavors: await fetchFlavors(),
      collections: await fetchCollections(),
      colors: await fetchColors(),
    },
  };
}
