import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';

const styles = {
  content: 'content',
  fadeIn: 'fadeInContent',
  fadeOut: 'fadeOutContent',
};

export default function Layout({
  children,
}: {
  headerVariant?: 'homepage' | 'default';
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>(
    'fadeOut'
  );

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut');
  }, [children, displayChildren]);

  return (
    <>
      <div className='gradient-opacity h-full w-full'>
        <Header variant={router.asPath == '/' ? 'homepage' : 'default'} />
        <AnimatePresence>
          <motion.main
            onTransitionEnd={() => {
              if (transitionStage === 'fadeOut') {
                setDisplayChildren(children);
                setTransitionStage('fadeIn');
              }
            }}
            className={`${styles.content} ${styles[transitionStage]}`}
          >
            {displayChildren}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
