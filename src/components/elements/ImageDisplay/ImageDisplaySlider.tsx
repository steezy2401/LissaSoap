import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageDisplaySliderItem = (props: { image: string }) => (
  <SwiperSlide className='w-full py-10'>
    <div>
      <div className='relative w-full pb-[90%] '>
        <Image
          src={props.image}
          alt='image'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  </SwiperSlide>
);

function ImageDisplaySlider({ children }: { children: React.ReactNode }) {
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
        {children}
      </Swiper>
    </div>
  );
}

ImageDisplaySlider.Item = ImageDisplaySliderItem;
export default ImageDisplaySlider;
