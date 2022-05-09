import { motion } from 'framer-motion';
import React from 'react';
import SwiperCore, {
  Autoplay,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ProductSliderSlide from './ProductSliderSlide';

import { ProductProps } from '@/types/product.types';

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
        centeredSlides={true}
        slidesPerView='auto'
        spaceBetween={50}
        loop
        pagination={{
          clickable: true,
          type: 'custom',
        }}
        navigation={true}
        modules={[Pagination, Navigation, Mousewheel]}
        className='indexSwiper'
      >
        {items.map((item, key) => (
          <SwiperSlide
            className='swiper-slide flex items-center justify-center py-10 pb-14'
            key={`slide-${key}`}
          >
            <ProductSliderSlide item={item} active={active} index={key} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
