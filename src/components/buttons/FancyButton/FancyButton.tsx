import { useHover } from '@mantine/hooks';
import { motion } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  icon?: JSX.Element;
}

const FancyButton = ({
  className,
  disabled,
  children,
  onClick,
  icon,
  ...rest
}: ButtonProps) => {
  const { hovered, ref } = useHover();

  const iconAnimation = {
    rotate: {
      rotate: 90,
      transition: { duration: 1.2 },
    },
    rotateBack: {
      rotate: -90,
      transition: { duration: 1.2 },
    },
    show: {
      y: '-50%',
      x: 0,
      transition: { duration: 1.2 },
    },
  };

  return (
    <button
      disabled={disabled}
      className='rounded-corners-gradient-borders rounded-xl border-0'
      onClick={(e) => {
        onClick && onClick(e);
      }}
      {...rest}
    >
      <div
        ref={ref}
        className={clsxm(
          'relative flex w-full justify-center rounded-xl bg-[#0B0B13] py-2 px-6',
          className
        )}
      >
        <motion.span
          initial='show'
          variants={iconAnimation}
          animate={hovered ? 'rotate' : 'rotateBack'}
          className='absolute left-2 top-1/2 -translate-y-1/2 leading-[0px] text-white'
        >
          {icon}
        </motion.span>
        <span className='pl-6 font-primary text-xl font-semibold text-white'>
          {children}
        </span>
      </div>
    </button>
  );
};

export default FancyButton;
