import { Divider } from '@mantine/core';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import PriceButton from '@/components/buttons/PriceButton/PriceButton';
import Breadcrumbs from '@/components/elements/Breadcrumbs/Breadcrumbs';
import Link from '@/components/elements/Link/Link';
import ProductGrid from '@/components/elements/ProductGrid/ProductGrid';
import SizePicker from '@/components/elements/SizePicker/SizePicker';
import CommentIcon from '@/components/icons/CommentIcon';
import CustomizeIcon from '@/components/icons/CustomizeIcon';
import DollyIcon from '@/components/icons/DollyIcon';
import RularIcon from '@/components/icons/RulerIcon';

import { getAllProductIds, getProductData } from '@/services/product.services';
import { fetchSuggestedProducts } from '@/services/products.services';

import { IProduct } from '@/types/product.types';
import { Sizes } from '@/types/size.types';

interface ProductPageProps {
  productData: IProduct;
  suggestedProducts: IProduct[];
}

export async function getStaticPaths() {
  const paths = await getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export default function ProductPage({
  productData,
  suggestedProducts,
}: ProductPageProps) {
  useEffect(() => {
    document.body.classList.add('productsGradient');
    return () => {
      document.body.classList.remove('productsGradient');
    };
  }, []);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [selectedSize, setSelectedSize] = useState<Sizes>();
  const [addToCart, setAddToCart] = useState(false);

  const handleAddToCart = () => {
    setAddToCart(true);

    //TODO: Add to cart
  };

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
        <div className='flex flex-col gap-5'>
          <div className='mt-10 flex flex-col gap-2'>
            {productData.inStock && (
              <div className='text-lg font-bold uppercase text-green'>
                <span>In stock</span>
              </div>
            )}
            <div className='flex flex-col'>
              <span className='text-5xl font-extrabold'>
                {productData.name}
              </span>
              <span className='text-lg  text-gray'>
                {productData.description}
              </span>
            </div>
          </div>
          <div>
            <Link href='/custom' variant='customize' Icon={CustomizeIcon}>
              Customize
            </Link>
          </div>
          <div className='mt-3 flex flex-col gap-3'>
            <SizePicker
              defaultValue='md'
              changeHandler={(value) => setSelectedSize(value)}
            />
            <Link href='/info/sizing-guide' variant='default' Icon={RularIcon}>
              Sizing guide
            </Link>
          </div>
          <div className='mt-7 w-full'>
            <PriceButton
              fullWidth={true}
              price={120}
              isLoading={addToCart}
              onClick={handleAddToCart}
            >
              Add to cart
            </PriceButton>
          </div>
          <Divider className='my-7' size='sm' color='greyBorder' />
          <div className='flex flex-col gap-3'>
            <Link href='/info/shipping' variant='default' Icon={DollyIcon}>
              Shipping & Prices
            </Link>
            <Link href='/support' variant='default' Icon={CommentIcon}>
              Ask a question
            </Link>
          </div>
        </div>
      </section>
      <section className='layout'>
        <h1>You may also like</h1>
        <ProductGrid items={suggestedProducts} />
      </section>
    </main>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: {
      suggestedProducts: await fetchSuggestedProducts(),
      productData: await getProductData(params.id),
    },
  };
}
