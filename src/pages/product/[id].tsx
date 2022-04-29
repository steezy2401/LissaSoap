import React from 'react';

import { getAllProductIds, getProductData } from '@/services/product.services';

import { IProduct } from '@/types/product.types';

interface ProductPageProps {
  productData: IProduct;
}

export async function getStaticPaths() {
  const paths = await getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export default function ProductPage({ productData }: ProductPageProps) {
  return (
    <div>
      <span>id: {productData.id}</span>
      <span>title: {productData.name}</span>
      <span>description: {productData.description}</span>
      <span>price: {productData.price}</span>
    </div>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const productData = await getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}
