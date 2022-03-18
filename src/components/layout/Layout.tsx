import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({
  headerVariant,
  children,
}: {
  headerVariant: 'homepage' | 'default';
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant={headerVariant} />
      {children}
      <Footer />
    </>
  );
}
