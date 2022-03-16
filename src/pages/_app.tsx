import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';

import Seo from '@/components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <MantineProvider
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: 'Proxima Nova, Inter',
        }}
      >
        <ThemeProvider defaultTheme='dark'>
          <Component {...pageProps} />
        </ThemeProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;
