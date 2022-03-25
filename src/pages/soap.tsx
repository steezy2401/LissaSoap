import React, { useEffect } from 'react';

import Layout from '@/components/layout/Layout';

export default function SoapPage() {
  useEffect(() => {
    document.body.classList.add('productsGradient');
    return () => {
      document.body.classList.remove('productsGradient');
    };
  }, []);

  return (
    <Layout>
      <main></main>
    </Layout>
  );
}
