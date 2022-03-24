import { motion } from 'framer-motion';
import React from 'react';
import { RiHeartLine } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

export default function AddToWish({
  className,
  size,
}: {
  className: string;
  size: number;
}) {
  const [hasClicked, setHasClicked] = React.useState(false);

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    click: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
  };

  const handleClick = () => {
    setHasClicked((hasClicked) => !hasClicked);
  };

  return (
    <motion.div
      className={clsxm('p-2', className, [
        hasClicked && [
          'bg-primary-500 text-white',
          'border border-primary-600',
          'hover:bg-primary-600 hover:text-white',
          'active:bg-primary-500',
          'disabled:bg-primary-400 disabled:hover:bg-primary-400',
        ],
      ])}
      initial='initial'
      whileTap='click'
      variants={buttonVariants}
      onClick={handleClick}
    >
      <RiHeartLine color={`${hasClicked ? '#FF005C' : 'white'}`} size={size} />
    </motion.div>
  );
}
