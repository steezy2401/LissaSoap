/* eslint-disable @next/next/no-document-import-in-page */
import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();
class MyDocument extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/Proxima_Nova.otf'
            as='font'
            type='font/otf'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
