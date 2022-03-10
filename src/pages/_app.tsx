import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Seo from '@/components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
