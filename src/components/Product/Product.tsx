import { useHover } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';

import AddToWish from '@/components/buttons/AddToWish/AddToWish';

import AddToCart from '../buttons/AddToCart/AddToCart';

import ProductProps from '@/types/typesProduct';

import bombImage from '~/images/bomb_big.png';

export default function Product({
  name,
  description,
  price,
  currencySign = '€',
  hasDiscount = false,
  lastPrice = 0,
  discountPercent = 0,
  imagePriority = false,
}: ProductProps) {
  const { hovered, ref } = useHover();

  return (
    <div
      ref={ref}
      className='outline-3 relative w-64 cursor-pointer select-none rounded-lg bg-black/10 p-3 bg-blend-overlay outline outline-white/50 backdrop-blur-md'
    >
      <AddToWish className='absolute right-0 top-0' size={25} />
      <AddToCart state={hovered} className='absolute left-0 -bottom-9 ' />
      <div className='flex justify-center align-middle'>
        <div className='relative h-48 w-48'>
          <Image
            src={bombImage}
            alt='image'
            layout='fill'
            priority={imagePriority}
          />
        </div>
      </div>
      <div className='mt-8'>
        <div className=''>
          <span className='-mb-2 block text-xl font-bold text-white'>
            {name}
          </span>
          <span className='block text-lg font-semibold text-[#999999]'>
            {description}
          </span>
        </div>
        <div className='flex items-end gap-4'>
          <span className='text-2xl font-bold text-white'>
            <span className='text-xl font-semibold'>{currencySign}</span>{' '}
            {price}
          </span>
          {hasDiscount && (
            <div className='flex items-end gap-2'>
              <span className='text-2xl font-semibold text-[#666666] line-through'>
                <span className='text-xl'>{currencySign}</span> {lastPrice}
              </span>
              <span className='text-gradient-green text-xl font-semibold leading-8'>
                {discountPercent}% off
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
