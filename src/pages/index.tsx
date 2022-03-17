import { Button } from '@mantine/core';
import * as React from 'react';

import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='h0 mt-4'>Index Page</h1>
            <Button>Buttons</Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
