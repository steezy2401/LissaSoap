import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface FiltersDropdownFieldProps
  extends React.ComponentPropsWithoutRef<'div'> {
  state: boolean;
  dropdownHandlers: {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
}

export default function FiltersDropdownField({
  children,
  state,
}: FiltersDropdownFieldProps) {
  const dropdownVariants = {
    initial: {
      y: -50,

      display: 'none',
    },
    show: {
      y: 0,
      opacity: 1,
      display: 'block',
    },
    hide: {
      y: -50,
      opacity: 0,
      display: 'none',
      transition: {
        duration: 0.3,
        y: { delay: 0.2, duration: 0.6 },
        display: {
          delay: 0.3,
        },
      },
    },
  };

  return (
    <AnimatePresence>
      {children != undefined && (
        <motion.div
          key='dropdown'
          className='rounded-corners-gradient-borders absolute top-[120%] z-50 mr-[-10000px] border-0'
          variants={dropdownVariants}
          initial='initial'
          animate={state ? 'show' : 'hide'}
          exit='hide'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
