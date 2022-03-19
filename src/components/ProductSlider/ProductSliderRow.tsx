import { motion } from 'framer-motion';
import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import ProductSliderSlide from './ProductSliderSlide';

import ProductProps from '@/types/typesProduct';

export default function ProductSliderRow({
  active,
  items,
}: {
  active: boolean;
  items: ProductProps[];
}) {
  SwiperCore.use([Autoplay]);

  const slider = {
    hidden: {
      opacity: 0,
      display: 'none',
      transition: {
        duration: 0.4,
      },
    },
    show: {
      opacity: 1,
      display: 'block',
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={slider}
      initial='hidden'
      animate={active ? 'show' : 'hidden'}
    >
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
      >
        {items.map((item, key) => (
          <SwiperSlide
            className='flex items-center justify-center py-10 pb-14'
            key={`${key}-${name}`}
          >
            <ProductSliderSlide item={item} active={active} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}