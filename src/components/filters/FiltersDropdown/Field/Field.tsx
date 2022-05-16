import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import motionVars from './Field.motion';

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
  return (
    <AnimatePresence>
      {children != undefined && state && (
        <motion.div
          key='dropdown'
          className='rounded-corners-gradient-borders absolute top-[120%] z-50 mr-[-10000px] border-0'
          variants={motionVars}
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
