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
import ProductProps from '@/types/product.types';

interface SoapPageProps {
  products: ProductProps[];
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
      <div className='mb-16 mt-28'>
        <FiltersBar
          handleFilters={handleFilters}
          flavors={flavors}
          collections={collections}
          colors={colors}
        />
      </div>
      <section className=''>
        <ProductGrid items={products} />
      </section>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: await fetchProducts(),
      flavors: await fetchFlavors(),
      collections: await fetchCollections(),
      colors: await fetchColors(),
    },
  };
}
