import React from 'react';

import PageTitle from '@/components/elements/PageTitle/PageTitle';
import ProductGrid from '@/components/elements/ProductGrid/ProductGrid';
import Layout from '@/components/layout/Layout';

import { fetchProducts } from '@/services/products.services';

import ProductProps from '@/types/product.types';

interface SoapPageProps {
  products: ProductProps[];
}

export default function SoapPage({ products }: SoapPageProps) {
  /*
  useEffect(() => {
    document.body.classList.add('productsGradient');
    return () => {
      document.body.classList.remove('productsGradient');
    };
  }, []);
  */

  return (
    <Layout>
      <main className='layout'>
        <div className='mt-5'>
          <PageTitle title='Soap' />
        </div>
        <div></div>
        <div className='mb-24 mt-24'></div>
        <section className='min-h-screen'>
          <ProductGrid items={products} />
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: await fetchProducts(),
    },
  };
}
