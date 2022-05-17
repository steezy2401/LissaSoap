import { Divider, Table } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import Accordion from '@/components/Accordion';
import AddToWish from '@/components/buttons/AddToWish';
import PriceButton from '@/components/buttons/PriceButton';
import Share from '@/components/buttons/Share';
import CommentIcon from '@/components/Icon/CommentIcon';
import CustomizeIcon from '@/components/Icon/CustomizeIcon';
import DollyIcon from '@/components/Icon/DollyIcon';
import RularIcon from '@/components/Icon/RulerIcon';
import ImageDisplayGrid from '@/components/ImageGrid';
import ImageDisplaySlider from '@/components/ImageSlider';
import Link from '@/components/Link';
import ProductGrid from '@/components/ProductGrid';
import SizePicker from '@/components/SizePicker';
import VariantsPicker from '@/components/VariantsPicker';

import { getProductData } from '@/services/product.services';

import { IProductFull } from '@/types/product.types';
import { Sizes } from '@/types/size.types';

interface ProductPageProps {
  productData: IProductFull;
  vari: number;
  slug: string;
}

export default function ProductPage({
  productData,
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
        <ImageDisplayGrid
          singleItem={productData.variants[variant].images.length == 1}
          className='hidden w-8/12 md:grid'
        >
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
            <div className='relative mt-10 flex flex-col gap-2 md:mt-0'>
              <div className='absolute right-0 top-0 flex flex-row gap-1'>
                <AddToWish size={30} />
                <Share size={30} />
              </div>
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
      {productData.information.length > 0 && (
        <section className='layout my-16'>
          <Accordion>
            <div className='flex-row gap-20 md:flex'>
              <Accordion.Title>
                <h1>Information</h1>
              </Accordion.Title>
              <Accordion.Body>
                {productData.information.map((item, key) => (
                  <Accordion.Item lable={item.title} key={`info-${key}`}>
                    <Table verticalSpacing='md' horizontalSpacing='xl'>
                      <tbody>
                        {item.fields.map((field, key) => (
                          <tr key={`info-field-${key}`}>
                            <td className='w-3/12 whitespace-pre-wrap break-normal'>
                              <span className='text-lg font-semibold text-gray'>
                                {field.title}
                              </span>
                            </td>
                            <td>
                              <span className='text-lg text-white'>
                                {field.text}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Accordion.Item>
                ))}
              </Accordion.Body>
            </div>
          </Accordion>
        </section>
      )}
      {productData.suggestedProducts.length > 0 && (
        <section className='layout'>
          <h1>You may also like</h1>
          <ProductGrid>
            {productData.suggestedProducts.map((item, key) => (
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
        </section>
      )}
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
  const variant = parseInt(query.vari) || 0;

  if (productData.status == 404) {
    return {
      notFound: true,
    };
  } else if (productData.status == 500) {
    throw new TypeError('Oops, something went wrong ;(');
  }

  if (productData.data.variants.length - 1 < variant || variant < 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug: params.slug,
      vari: variant,
      productData: productData.data,
    },
  };
}
