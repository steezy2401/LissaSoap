import Image from 'next/image';
import * as React from 'react';
import { useRef } from 'react';

import Layout from '@/components/layout/Layout';
import LearnMore from '@/components/LearnMore/LearnMore';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

import logo from '~/images/logo.png';

const slider = {
  tabs: [
    { title: 'New', showCounter: true, counter: 8, active: true },
    { title: 'Popular', showCounter: true, counter: 17 },
  ],
  sections: [
    {
      title: 'New',
      items: [
        { name: 'Bomb', description: 'Purple, Vanilla', price: 110 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
      ],
    },
    {
      title: 'Popular',
      items: [
        { name: 'Bomb', description: 'Purple, Vanilla', price: 110 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
      ],
    },
  ],
};

export default function HomePage() {
  const scrollTo = useRef(null);

  return (
    <Layout headerVariant='homepage'>
      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-around text-center'>
            <div className='flex flex-col gap-20 md:gap-1'>
              <Image src={logo} alt='logo' className='select-none' />
              <h1 className='text-2xl font-extrabold md:text-4xl'>
                Explore a beautiful world of{' '}
                <span className='text-gradient'>soap</span> with us
              </h1>
            </div>
            <LearnMore refToScroll={scrollTo} />
          </div>
        </section>
        <section ref={scrollTo}>
          <div className='flex min-h-screen items-center'>
            <ProductSlider tabs={slider.tabs} sections={slider.sections} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
