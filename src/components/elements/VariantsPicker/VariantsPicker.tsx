import { ColorSwatch, Tooltip } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

import clsxm from '@/lib/clsxm';

interface IVariant {
  title?: string;
  color: string;
  active?: boolean;
  onClick?: () => void;
}

const variants = {
  idle: {
    scale: 1,
  },
  hover: {
    scale: 1.35,
  },
  active: {
    scale: 1.5,
  },
};

const VariantsItem = ({
  title,
  color,
  active = false,
  onClick = () => void 1,
}: IVariant) => {
  const { hovered, ref } = useHover();
  const animationControls = useAnimation();

  useEffect(() => {
    if (hovered && !active) {
      animationControls.start('hover');
    } else if (active) {
      animationControls.start('active');
    } else {
      animationControls.start('idle');
    }
  }, [active, animationControls, hovered]);

  return (
    <Tooltip
      label={title}
      transition='pop'
      transitionDuration={300}
      openDelay={600}
      radius='lg'
      withArrow
    >
      <div ref={ref} className={clsxm('relative')}>
        <motion.div
          variants={variants}
          initial='idle'
          animate={animationControls}
          style={{ backgroundColor: 'rgba(221, 235, 255, 0.15)' }}
          className='absolute top-0 left-0 h-full w-full rounded-md'
        ></motion.div>
        <ColorSwatch
          className='cursor-pointer '
          key={color}
          color={color}
          radius='sm'
          onClick={() => {
            onClick && onClick();
          }}
        />
      </div>
    </Tooltip>
  );
};

const VariantsPicker = ({ children }: { children: React.ReactNode }) => {
  return <div className='inline-flex justify-center gap-4'>{children}</div>;
};

VariantsPicker.Item = VariantsItem;

export default VariantsPicker;
