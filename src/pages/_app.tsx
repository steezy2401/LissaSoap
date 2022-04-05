import { MantineProvider } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import React from 'react';

import '@/styles/globals.css';
import '@/styles/gradients.css';
import '@/styles/gradientBackground.css';
import '@/styles/animations.css';

import Loader from '@/components/layout/Loader';
import Seo from '@/components/Seo';

import { mantineTheme } from '@/stylesheet';

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  Router.events.on('routeChangeStart', () => setPageLoading(true));
  Router.events.on('routeChangeComplete', () => setPageLoading(false));
  Router.events.on('routeChangeError', () => setPageLoading(false));

  return (
    <>
      <>
        <Seo />
        <Script src='/theme.js' strategy='beforeInteractive' />
        <ThemeProvider defaultTheme='dark'>
          <MantineProvider withNormalizeCSS theme={mantineTheme}>
            <AnimatePresence>
              {pageLoading ? (
                <motion.div
                  key='loader'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Loader />
                </motion.div>
              ) : (
                <Component {...pageProps} />
              )}
            </AnimatePresence>
          </MantineProvider>
        </ThemeProvider>
      </>
    </>
  );
}

export default MyApp;
