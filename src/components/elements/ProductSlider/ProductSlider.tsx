import { motion } from 'framer-motion';
import React, { Children } from 'react';
import { Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Product from '@/components/elements/Product';
import ProductWrapper from '@/components/elements/ProductWrapper';

import motionVars from './ProductSlider.motion';

import { IProduct } from '@/types/product.types';

interface IProductSliderItem extends IProduct {
  index: number;
}

const ProductSliderItem = ({
  index,
  id,
  slug,
  name,
  image,
  description,
  price,
  hasDiscount,
}: IProductSliderItem) => {
  return (
    <ProductWrapper index={index}>
      <Product
        id={id}
        slug={slug}
        image={image}
        name={name}
        description={description}
        price={price}
        hasDiscount={hasDiscount}
      />
    </ProductWrapper>
  );
};

const ProductSlider = ({ children }: { children: React.ReactNode }) => {
  //SwiperCore.use([Autoplay]);

  const slides = Children.toArray(children) as React.ReactElement[];

  return (
    <motion.div variants={motionVars} initial='hidden' animate='show'>
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
        {slides.map((slide, index) => (
          <SwiperSlide
            className='swiper-slide flex items-center justify-center py-10 pb-14'
            key={index}
          >
            {React.cloneElement(slide)}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

ProductSlider.Item = ProductSliderItem;

export default ProductSlider;
