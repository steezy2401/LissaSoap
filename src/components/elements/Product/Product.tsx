import { useHover } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';

import AddToWish from '@/components/buttons/AddToWish/AddToWish';

import AddToCart from '../../buttons/AddToCart/AddToCart';

import ProductProps from '@/types/product.types';

import bombImage from '~/images/bomb_big.png';

export default function Product({
  id,
  name,
  description,
  price,
  currencySign = '€',
  hasDiscount = false,
  lastPrice = 0,
}: /*discountPercent = 0,*/
ProductProps) {
  const { hovered, ref } = useHover();

  return (
    <div
      ref={ref}
      data-id={id}
      className='relative aspect-auto h-full w-[45vw] max-w-xs cursor-pointer select-none rounded-2xl bg-black/10 px-3 pb-3 bg-blend-overlay outline outline-2 outline-white/50 backdrop-blur-md md:w-[26vw] md:px-5 md:outline-4 lg:w-[19vw]'
    >
      <AddToWish className='absolute right-0 top-0 hidden md:block' size={30} />
      <AddToCart state={hovered} className='absolute left-0 -bottom-9 ' />
      <div className='flex justify-center pt-3 align-middle md:pt-7'>
        <div className='relative w-full pb-[90%]'>
          <Image
            src={bombImage}
            alt='image'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='mt-2 md:mt-8'>
        <div className=''>
          <span className='-mb-1 block text-md font-semibold text-white md:-mb-2 md:text-2xl'>
            {name}
          </span>
          <span className='block text-[15px] font-semibold text-[#999999] md:text-lg'>
            {description}
          </span>
        </div>
        <div className='flex items-end gap-5'>
          <span className='text-2xl font-bold text-white md:text-3xl'>
            <span className='text-xl font-semibold md:text-2xl'>
              {currencySign}
            </span>{' '}
            {price}
          </span>
          {hasDiscount && (
            <div className='flex flex-col overflow-hidden'>
              <span className='text-xl font-semibold text-[#666666] line-through md:text-2xl'>
                <span className='text-md md:text-xl'>{currencySign}</span>{' '}
                {lastPrice}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
