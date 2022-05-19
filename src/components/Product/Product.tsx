import { useHover } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HoverButton from '@/components/buttons/HoverButton';
import IconButton from '@/components/buttons/IconButton';

import { ProductProps } from '@/types/product.types';

export default function Product({
  id,
  slug,
  image,
  name,
  description,
  price,
  hasDiscount = false,
  discountPrice,
}: ProductProps) {
  const { hovered, ref } = useHover();

  return (
    <div
      ref={ref}
      data-id={id}
      className='relative aspect-auto h-full w-[45vw] max-w-xs cursor-pointer select-none rounded-2xl bg-black/10 px-3 pb-3 bg-blend-overlay outline outline-2 outline-white/50 backdrop-blur-md md:w-[26vw] md:px-5 md:outline-4 lg:w-[19vw]'
    >
      <IconButton
        className='absolute right-0 top-0 hidden md:block'
        size={30}
        colorSec='#FF005C'
      />
      <HoverButton state={hovered} className='absolute left-0 -bottom-9'>
        Add to cart
      </HoverButton>
      <Link href={`/product/${slug}`} passHref>
        <a href={`/product/${slug}`} className='no-underline'>
          <div className='flex justify-center pt-3 align-middle md:pt-7'>
            <div className='relative w-full pb-[90%]'>
              <Image
                src={image}
                alt='image'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
          <div className='mt-2 md:mt-3'>
            <div className=''>
              <span className='-mb-1 block text-md font-semibold text-white md:-mb-2 md:text-2xl'>
                {name}
              </span>
              <span className='block text-[15px] font-semibold text-[#999999] md:text-lg'>
                {description}
              </span>
            </div>
            <div className='mt-1 flex items-end gap-4'>
              <span className='text-2xl font-bold text-white md:text-3xl'>
                <span className='text-xl font-semibold md:text-2xl'>€</span>{' '}
                {!hasDiscount ? price : discountPrice}
              </span>
              {hasDiscount && (
                <div className='flex flex-col overflow-hidden'>
                  <span className='text-xl font-semibold text-[#666666] line-through md:text-2xl'>
                    <span className='text-md md:text-xl'>€</span> {price}
                  </span>
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
