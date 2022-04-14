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
    <AnimatePresence>
      {children != undefined && state && (
        <motion.div
          key='dropdown'
          className='rounded-corners-gradient-borders absolute top-[110%] mr-[-10000px] border-0'
          variants={dropdownVariants}
          initial='initial'
          animate='show'
          exit='hide'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
