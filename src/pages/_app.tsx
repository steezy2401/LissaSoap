import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import React from 'react';

import '@/styles/globals.css';
import '@/styles/gradientBackground.css';
import '@/styles/animations.css';

import Seo from '@/components/Seo';

import { mantineTheme } from '@/stylesheet';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      {pageLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Seo />

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
