import { SegmentedControl } from '@mantine/core';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Breadcrumbs from '@/components/elements/Breadcrumbs/Breadcrumbs';

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
  useEffect(() => {
    document.body.classList.add('productsGradient');
    return () => {
      document.body.classList.remove('productsGradient');
    };
  }, []);

  return (
    <main>
      <div className='rounded-3xl bg-[#070707] bg-opacity-70'>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='productSwiper'
        >
          {productData.images.map((item, key) => (
            <SwiperSlide className='w-full py-10' key={`slide-${key}`}>
              <div>
                <div className='relative w-full pb-[90%]'>
                  <Image
                    src={item}
                    alt='image'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className='layout'>
        <div className='mt-5'>
          <Breadcrumbs
            customCrumbs={[{ title: 'Catalog', href: '/catalog' }]}
          />
        </div>
        <div className='mt-10 flex flex-col gap-3'>
          {productData.inStock && (
            <div className='text-lg font-bold uppercase text-green'>
              <span>In stock</span>
            </div>
          )}
          <div className='flex flex-col'>
            <span className='text-5xl font-extrabold'>{productData.name}</span>
            <span className='text-lg  text-gray'>
              {productData.description}
            </span>
          </div>
        </div>
        <div className='mt-7'>
          <SegmentedControl
            styles={{
              root: {
                border: '2px solid #293FFF',
                backgroundColor: 'rgba(0, 0, 0, 0)',
              },
              label: {
                color: '#F8F8FF',
                fontSize: '1.1rem',
                lineHeight: '1.1rem',
                fontWeight: '500',
                padding: '0.5em 1em',
              },
              active: {
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
              },
            }}
            radius='lg'
            data={[
              { label: 'Small', value: 'sm' },
              { label: 'Medium', value: 'md' },
              { label: 'Large', value: 'lg' },
            ]}
          />
        </div>
      </section>
    </main>
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
