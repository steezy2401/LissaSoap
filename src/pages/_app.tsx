import { MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import React from 'react';

import '@/styles/globals.css';
import '@/styles/gradients.css';
import '@/styles/gradientBackground.css';
import '@/styles/animations.css';

import Layout from '@/components/Layout/Layout';
import Loader from '@/components/Layout/Loader/Loader';
import Seo from '@/components/Seo';

import { mantineTheme } from '@/stylesheet';

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  Router.events.on('routeChangeStart', () => setPageLoading(true));
  Router.events.on('routeChangeComplete', () => setPageLoading(false));
  Router.events.on('routeChangeError', () => setPageLoading(false));

  return (
    <>
      <ThemeProvider defaultTheme='dark'>
        <MantineProvider withNormalizeCSS theme={mantineTheme}>
          <Seo />
          <Layout>
            {pageLoading ? (
              <AnimatePresence>
                <Loader />
              </AnimatePresence>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </MantineProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
