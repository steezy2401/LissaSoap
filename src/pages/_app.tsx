import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import '@/styles/gradientBackground.css';
import '@/styles/animations.css';

import Seo from '@/components/Seo';

import { mantineTheme } from '@/stylesheet';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <MantineProvider withNormalizeCSS theme={mantineTheme}>
        <ThemeProvider defaultTheme='dark'>
          <Component {...pageProps} />
        </ThemeProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;
