import { Button } from '@mantine/core';
import * as React from 'react';

export default function HomePage() {
  return (
    <main>
      <section>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <h1 className='h0 mt-4'>Index Page</h1>
          <Button>Buttons</Button>
        </div>
      </section>
    </main>
  );
}
