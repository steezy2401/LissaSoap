import Image from 'next/image';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { IoLogoInstagram } from 'react-icons/io';

import Button from '@/components/buttons/Button/Button';
import Layout from '@/components/layout/Layout';
import LearnMore from '@/components/LearnMore/LearnMore';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

import { fetchSlider } from '@/services/slider.services';

import Slider from '@/types/slider.types';

import colorPicker from '~/images/color_picker.png';
import inst from '~/images/inst.png';
import logo from '~/images/logo.png';
import logoMobile from '~/images/logo_mobile.png';

export default function HomePage({ slider }: { slider: Slider }) {
  useEffect(() => {
    document.body.classList.add('indexGradient');
    return () => {
      document.body.classList.remove('indexGradient');
    };
  }, []);

  const scrollTo = useRef(null);

  return (
    <Layout headerVariant='homepage'>
      <main>
        <section>
          <div className='flex min-h-screen flex-col items-center justify-around text-center'>
            <div className='flex w-11/12 flex-col gap-20 md:w-5/6 md:gap-10'>
              <div className='hidden md:block'>
                <Image src={logo} alt='logo' className='select-none' priority />
              </div>
              <div className='block md:hidden'>
                <Image
                  src={logoMobile}
                  alt='logo'
                  className='select-none'
                  priority
                />
              </div>
              <h1 className='hidden text-5xl font-extrabold md:block'>
                Explore a beautiful world of{' '}
                <span className='text-gradient font-extrabold'>soap</span> with
                us
              </h1>
              <h1 className='flex flex-col gap-2 text-4xl font-extrabold md:hidden'>
                <span>
                  Explore a beautiful world of{' '}
                  <span className='text-gradient font-extrabold'>soap</span>
                </span>
                <span>with us</span>
              </h1>
            </div>
            <LearnMore refToScroll={scrollTo} className='md:-mt-24' />
          </div>
        </section>
        <section ref={scrollTo}>
          <div className='flex min-h-screen flex-col items-center justify-center gap-10'>
            <ProductSlider tabs={slider.tabs} sections={slider.sections} />
            <Button variant='filled'>View catalog</Button>
          </div>
        </section>
        <section className='layout'>
          <div className='flex flex-col gap-24'>
            <div className='justify-between gap-10 md:flex'>
              <div>
                <h1 className='text-4xl md:text-5xl'>
                  Create your own{' '}
                  <span className='text-gradient-cyan-prurple font-extrabold'>
                    custom
                  </span>{' '}
                  soap
                </h1>
                <div className='mb-8 mt-14 flex items-center justify-center md:hidden'>
                  <div className='w-2/3'>
                    <Image
                      src={colorPicker}
                      alt='logo'
                      className='select-none'
                      priority
                    />
                  </div>
                </div>
                <span className='block text-lg text-[#828282] md:text-xl'>
                  You can customize any soap in our store or create your own
                  from scratch
                </span>
                <Button className='mt-8' variant='gradient'>
                  Start building
                </Button>
              </div>
              <div className='hidden w-2/5 text-right md:block'>
                <Image
                  src={colorPicker}
                  alt='logo'
                  className='select-none'
                  priority
                />
              </div>
            </div>

            <div className='justify-between gap-10 md:flex'>
              <div className='order-2 shrink'>
                <h1 className='text-4xl md:text-5xl'>
                  Follow{' '}
                  <span className='text-gradient-pink-prurple font-extrabold'>
                    LissaSoap
                  </span>{' '}
                  on Instagram
                </h1>
                <div className='mb-8 mt-14 flex items-center justify-center md:hidden'>
                  <div className='w-2/3'>
                    <Image
                      src={inst}
                      alt='logo'
                      className='select-none'
                      priority
                    />
                  </div>
                </div>
                <span className='block text-lg text-[#828282] md:text-xl'>
                  Our Instagram is full of delightful photos of our soap
                  collections. Follow us to stay tuned
                </span>
                <Button
                  className='mt-8'
                  variant='outline'
                  icon={<IoLogoInstagram size={25} />}
                  onClick={() =>
                    window.open('https://www.instagram.com/', '_blank')
                  }
                >
                  Follow us
                </Button>
              </div>
              <div className='order-1 hidden w-1/5 items-center justify-center md:flex'>
                <Image src={inst} alt='logo' className='select-none' priority />
              </div>
            </div>
          </div>
        </section>
        <div className='mb-24 mt-48'></div>
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
