import { motion } from 'framer-motion';
import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Layout({
  headerVariant = 'default',
  children,
}: {
  headerVariant?: 'homepage' | 'default';
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='gradient-opacity h-full w-full'>
        <Header variant={headerVariant} />
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial='hidden' // Set the initial state to variants.hidden
          animate='enter' // Animated state to variants.enter
          exit='exit' // Exit state (used later) to variants.exit
          transition={{ type: 'linear', duration: 1 }} // Set the transition to linear
          className=''
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
