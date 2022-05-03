import { SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageDisplayProps {
  variant?: 'grid' | 'slider';
  images: string[];
  className: string;
}

const ImageDisplaySlider = ({ images }: { images: string[] }) => {
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
        {images.map((item, key) => (
          <SwiperSlide className='w-full py-10' key={`slide-${key}`}>
            <div>
              <div className='relative w-full pb-[90%] '>
                <Image
                  src={item}
                  alt='image'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ImageDisplayGrid = ({ images }: { images: string[] }) => {
  const itemsVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.4,
        delay: 0,
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
    },
  };

  return (
    <SimpleGrid cols={2} className='h-full'>
      {images.map((item, key) => (
        <motion.div
          initial='hidden'
          variants={itemsVariants}
          animate='show'
          transition={{
            duration: 0.4,
            delay: key * 0.1,
            type: 'spring',
            damping: 13,
            stiffness: 150,
          }}
          key={`slide-desk-${key}`}
          className='flex justify-center rounded-3xl bg-[#070707] bg-opacity-40'
        >
          <div className='relative w-full pb-[90%]'>
            <Image src={item} alt='image' layout='fill' objectFit='contain' />
          </div>
        </motion.div>
      ))}
    </SimpleGrid>
  );
};

const ImageDisplay = ({
  variant = 'grid',
  images,
  className,
}: ImageDisplayProps) => {
  return (
    <div className={className}>
      {variant == 'slider' && <ImageDisplaySlider images={images} />}
      {variant == 'grid' && <ImageDisplayGrid images={images} />}
    </div>
  );
};

export default ImageDisplay;
