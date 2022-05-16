import Image from 'next/image';
import React, { Children } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageDisplaySliderItem = (props: { image: string }) => (
  <div>
    <div className='relative w-full pb-[90%] '>
      <Image src={props.image} alt='image' layout='fill' objectFit='contain' />
    </div>
  </div>
);

function ImageDisplaySlider({ children }: { children: React.ReactNode }) {
  const slides = Children.toArray(children) as React.ReactElement[];

  return (
    <div className='rounded-3xl bg-[#070707] bg-opacity-70 md:hidden'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='productSwiper'
      >
        {slides.map((slide, index) => (
          <SwiperSlide className='w-full py-10' key={index}>
            {React.cloneElement(slide)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

ImageDisplaySlider.Item = ImageDisplaySliderItem;
export default ImageDisplaySlider;
