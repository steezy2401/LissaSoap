import Image from 'next/image';
import * as React from 'react';
import { useRef } from 'react';

import Layout from '@/components/layout/Layout';
import LearnMore from '@/components/LearnMore/LearnMore';
import Product from '@/components/Product/Product';

import logo from '~/images/logo.png';

export default function HomePage() {
  const scrollTo = useRef(null);

  return (
    <Layout headerVariant='homepage'>
      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-around text-center'>
            <div className='flex flex-col gap-20 md:gap-1'>
              <Image src={logo} alt='logo' className='select-none' />
              <p className='text-2xl font-extrabold md:text-4xl'>
                Explore a beautiful world of{' '}
                <span className='text-gradient'>soap</span> with us
              </p>
            </div>
            <LearnMore refToScroll={scrollTo} />
          </div>
        </section>
        <section ref={scrollTo}>
          <div className='layout  min-h-screen '>
            <Product name='Bomb' description='Purple, Vanilla' price={120} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
