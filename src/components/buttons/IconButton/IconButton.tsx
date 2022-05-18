import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

import motionVars from './IconButton.motion';

interface IconButtonProps {
  className?: string;
  size: number;
  colorInit?: string;
  colorSec?: string;
  icon?: React.ReactElement;
}

export default function IconButton({
  className,
  size,
  colorInit = 'white',
  colorSec = 'white',
  icon = <AiOutlineHeart />,
}: IconButtonProps) {
  const [hasClicked, setHasClicked] = React.useState(false);

  const handleClick = () => {
    setHasClicked((hasClicked) => !hasClicked);
  };

  return (
    <motion.div
      className={clsxm('cursor-pointer p-2', className, [
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
      variants={motionVars}
      onClick={handleClick}
    >
      {React.cloneElement(icon, {
        color: hasClicked ? colorSec : colorInit,
        size: size,
      })}
    </motion.div>
  );
}
