import {
  ColorPicker as MantineColorPicker,
  ColorSwatch,
  Tooltip,
} from '@mantine/core';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsDropletHalf } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

export default function ColorPicker() {
  const [opened, handlers] = useDisclosure(false);
  const [value, onChange] = useState('rgba(255, 255, 255, 0.1)');
  const ref = useClickOutside(() => handlers.close());

  const pickerVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div ref={ref} className='relative'>
      <Tooltip
        label='Pick color'
        withArrow
        transition='pop'
        transitionDuration={300}
        openDelay={600}
        radius='lg'
        className='text-center'
      >
        <div>
          <div
            className={clsxm(
              `cursor-pointer rounded-full border-2 border-solid border-transparent p-1`
            )}
            onClick={() => handlers.toggle()}
          >
            <ColorSwatch key='color-picker' color={value} size={35}>
              <BsDropletHalf color='white' />
            </ColorSwatch>
          </div>
        </div>
      </Tooltip>
      <AnimatePresence>
        {opened && (
          <motion.div
            variants={pickerVariants}
            initial='initial'
            animate='show'
            exit='hide'
            className='absolute left-1/2 -translate-x-1/2 rounded-xl bg-[#1a1a1a] p-2'
          >
            <MantineColorPicker onChange={onChange} format='hex' />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
