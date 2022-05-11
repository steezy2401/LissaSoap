import { Divider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import PriceButton from '@/components/buttons/PriceButton/PriceButton';
import Accordion from '@/components/elements/Accordion/Accrodion';
import ImageDisplayGrid from '@/components/elements/ImageDisplay/ImageDisplayGrid';
import ImageDisplaySlider from '@/components/elements/ImageDisplay/ImageDisplaySlider';
import Link from '@/components/elements/Link/Link';
import ProductGrid from '@/components/elements/ProductGrid/ProductGrid';
import SizePicker from '@/components/elements/SizePicker/SizePicker';
import VariantsPicker from '@/components/elements/VariantsPicker/VariantsPicker';
import CommentIcon from '@/components/icons/CommentIcon';
import CustomizeIcon from '@/components/icons/CustomizeIcon';
import DollyIcon from '@/components/icons/DollyIcon';
import RularIcon from '@/components/icons/RulerIcon';

import { getProductData } from '@/services/product.services';
import { fetchSuggestedProducts } from '@/services/products.services';

import { IProduct } from '@/types/product.types';
import { Sizes } from '@/types/size.types';

interface ProductPageProps {
  productData: IProduct;
  suggestedProducts: IProduct[];
  vari: number;
  slug: string;
}

export default function ProductPage({
  productData,
  suggestedProducts,
  vari,
  slug,
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
  const [variant, setVariant] = useState<number>(vari);

  useEffect(() => {
    window.history.pushState(
      null,
      'Post by John',
      `/product/${slug}?vari=${variant}`
    );
  }, [variant, slug]);

  const handleAddToCart = () => {
    setAddToCart(true);

    //TODO: Add to cart
  };

  return (
    <main>
      <ImageDisplaySlider>
        {productData.variants[variant].images.map((item, key) => (
          <ImageDisplaySlider.Item
            image={process.env.API_URL + item.url}
            key={`image-${key}`}
          />
        ))}
      </ImageDisplaySlider>

      <section className='layout flex-row gap-16 md:mt-7 md:flex md:w-full md:max-w-full md:px-10'>
        <ImageDisplayGrid className='hidden w-8/12 md:block'>
          <AnimatePresence>
            {productData.variants[variant].images.map((item, key) => (
              <ImageDisplayGrid.Item
                image={process.env.API_URL + item.url}
                index={key}
                key={`image-grid-${key}`}
              />
            ))}
          </AnimatePresence>
        </ImageDisplayGrid>
        <div className='md:w-4/12'>
          <div className='top-28 flex flex-col gap-5 md:sticky '>
            <div className='mt-10 flex flex-col gap-2 md:mt-0'>
              <div className='text-lg font-bold uppercase '>
                {productData.inStock ? (
                  <span className='text-green'>In stock</span>
                ) : (
                  <span className='text-red'>Out of stock</span>
                )}
              </div>
              <div className='flex flex-col'>
                <span className='text-5xl font-extrabold'>
                  {productData.name}
                </span>
                <span className='text-lg  text-gray'>
                  {productData.description}
                </span>
              </div>
            </div>
            <div className='mt-3'>
              <VariantsPicker>
                {productData.variants.map((item, key) => (
                  <VariantsPicker.Item
                    active={variant == key}
                    key={key}
                    title={item.title}
                    color={item.color.color}
                    onClick={() => setVariant(key)}
                  />
                ))}
              </VariantsPicker>
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
                className='min-w-min xl:w-8/12'
              />
              <Link
                href='/info/sizing-guide'
                variant='no-underline'
                Icon={RularIcon}
              >
                Sizing guide
              </Link>
            </div>
            <div className='mt-7 w-full xl:w-8/12'>
              <PriceButton
                fullWidth={true}
                price={120}
                isLoading={addToCart}
                onClick={handleAddToCart}
                disabled={!productData.inStock}
              >
                Add to cart
              </PriceButton>
            </div>
            <Divider className='my-7' size='sm' color='greyBorder' />
            <div className='flex flex-col gap-3'>
              <Link
                href='/info/shipping'
                variant='no-underline'
                Icon={DollyIcon}
              >
                Shipping & Prices
              </Link>
              <Link href='/support' variant='no-underline' Icon={CommentIcon}>
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='layout my-16'>
        <Accordion>
          <div className='flex-row gap-20 md:flex'>
            <Accordion.Title>
              <h1>Information</h1>
            </Accordion.Title>
            <Accordion.Body>
              <Accordion.Item lable='Creation process'>
                Colors, fonts, shadows and many other parts are customizable to
                fit your design needs
              </Accordion.Item>
              <Accordion.Item lable='Consist'>
                Colors, fonts, shadows and many other parts are customizable to
                fit your design needs
              </Accordion.Item>
            </Accordion.Body>
          </div>
        </Accordion>
      </section>
      <section className='layout'>
        <h1>You may also like</h1>
        <ProductGrid items={suggestedProducts} />
      </section>
    </main>
  );
}

export async function getServerSideProps({
  params,
  query,
}: {
  params: { slug: string };
  query: { vari: string };
}) {
  const productData = await getProductData(params.slug);

  if (productData.status == 404) {
    return {
      notFound: true,
    };
  } else if (productData.status == 500) {
    throw new TypeError('Oops, something went wrong ;(');
  }

  return {
    props: {
      slug: params.slug,
      vari: parseInt(query.vari) || 0,
      suggestedProducts: await fetchSuggestedProducts(),
      productData: productData.data,
    },
  };
}
