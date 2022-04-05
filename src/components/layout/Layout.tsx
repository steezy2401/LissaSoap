import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Layout({
  children,
}: {
  headerVariant?: 'homepage' | 'default';
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      <div className='gradient-opacity h-full w-full'>
        <Header variant={router.asPath == '/' ? 'homepage' : 'default'} />
        <AnimatePresence>
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
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
