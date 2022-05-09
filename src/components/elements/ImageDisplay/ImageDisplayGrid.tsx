import { SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import clsxm from '@/lib/clsxm';

const ImageDisplayGridItem = (props: { image: string; index: number }) => {
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
    <motion.div
      initial='hidden'
      variants={itemsVariants}
      animate='show'
      transition={{
        duration: 0.4,
        delay: props.index * 0.1,
        type: 'spring',
        damping: 13,
        stiffness: 150,
      }}
      className='flex justify-center rounded-3xl bg-[#070707] bg-opacity-40'
    >
      <div className='relative w-full pb-[90%]'>
        <Image
          src={props.image}
          alt='image'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </motion.div>
  );
};

const ImageDisplayGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <SimpleGrid cols={2} className={clsxm('h-full', className)}>
      {children}
    </SimpleGrid>
  );
};

ImageDisplayGrid.Item = ImageDisplayGridItem;
export default ImageDisplayGrid;
