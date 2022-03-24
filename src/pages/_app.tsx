import { MantineProvider } from '@mantine/core';
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

import Seo from '@/components/Seo';

import { mantineTheme } from '@/stylesheet';

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  Router.events.on('routeChangeStart', () => setPageLoading(true));
  Router.events.on('routeChangeComplete', () => setPageLoading(false));
  Router.events.on('routeChangeError', () => setPageLoading(false));

  return (
    <>
      {pageLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Seo />
          <Script src='/theme.js' strategy='beforeInteractive' />
          <ThemeProvider defaultTheme='dark'>
            <MantineProvider withNormalizeCSS theme={mantineTheme}>
              <Component {...pageProps} />
            </MantineProvider>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
