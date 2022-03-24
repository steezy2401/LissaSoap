import Image from 'next/image';
import * as React from 'react';
import { useRef } from 'react';

import Button from '@/components/buttons/Button/Button';
import Layout from '@/components/layout/Layout';
import LearnMore from '@/components/LearnMore/LearnMore';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

import { fetchSlider } from '@/services/slider.services';

import Slider from '@/types/slider.types';

import logo from '~/images/logo.png';

export default function HomePage({ slider }: { slider: Slider }) {
  const scrollTo = useRef(null);

  return (
    <Layout headerVariant='homepage'>
      <main>
        <section>
          <div className='flex min-h-screen flex-col items-center justify-around text-center'>
            <div className='gap-25 flex  w-5/6 flex-col md:gap-1'>
              <Image src={logo} alt='logo' className='select-none' priority />
              <h1 className='text-2xl font-extrabold md:text-5xl'>
                Explore a beautiful world of{' '}
                <span className='text-gradient'>soap</span> with us
              </h1>
            </div>
            <LearnMore refToScroll={scrollTo} />
          </div>
        </section>
        <section ref={scrollTo}>
          <div className='flex min-h-screen flex-col items-center justify-center gap-10'>
            <ProductSlider tabs={slider.tabs} sections={slider.sections} />
            <Button variant='filled'>View catalog</Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      slider: await fetchSlider(),
    },
  };
}
