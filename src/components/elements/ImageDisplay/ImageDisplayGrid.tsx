import { SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

import ImageX from '../ImageX/ImageX';

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
  exit: {
    y: -50,
    x: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const ImageDisplayGridItem = (props: { image: string; index: number }) => {
  return (
    <motion.div
      key={`${props.index}-${props.image}`}
      initial='hidden'
      variants={itemsVariants}
      animate='show'
      exit='exit'
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
        <ImageX
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
  singleItem = false,
}: {
  children: React.ReactNode;
  className: string;
  singleItem?: boolean;
}) => {
  return (
    <SimpleGrid
      cols={singleItem ? 1 : 2}
      className={clsxm('h-full', className)}
    >
      {children}
    </SimpleGrid>
  );
};

ImageDisplayGrid.Item = ImageDisplayGridItem;
export default ImageDisplayGrid;
