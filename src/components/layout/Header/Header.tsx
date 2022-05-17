import { Burger, Center } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
import { RiHandbagLine } from 'react-icons/ri';

import Link from '@/components/Link/Link';

import navItems from '@/static/navItems.static';

import HeaderLogo from '~/images/header_logo.png';

export default function Header(props: { variant: 'homepage' | 'default' }) {
  const [opened, setOpened] = useState(false);

  return (
    <header className='sticky top-0 z-50 rounded-b-2xl bg-gradient-to-br from-black px-5'>
      <div className='flex h-20 items-center'>
        <nav className='mr-auto flex-none md:flex-1'>
          <Center inline className='flex content-center gap-8'>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size='md'
            />
            {navItems.map(({ href, label, variant }) => (
              <Link
                key={`${href}${label}`}
                href={href}
                variant={variant}
                className='hidden md:block'
              >
                {label}
              </Link>
            ))}
          </Center>
        </nav>
        <AnimatePresence>
          <motion.div
            key='header'
            initial={{ opacity: 0 }}
            animate={{ opacity: props.variant !== 'default' ? 0 : 1 }}
            className={`static h-24 flex-none md:relative md:flex-1 ${
              props.variant !== 'default' ? 'opacity-0' : ''
            }`}
          >
            <Link href='/'>
              <Image
                className='cursor-pointer'
                src={HeaderLogo}
                alt='Picture of the author'
                objectFit='contain'
                layout='fill'
                quality={100}
                priority
              />
            </Link>
          </motion.div>
        </AnimatePresence>
        <Center
          inline
          className='ml-auto flex flex-none content-center gap-5 md:flex-1'
        >
          <HiOutlineSearch size={25} className='hidden md:block' />
          <HiOutlineUser size={25} className='hidden md:block' />
          <AiOutlineHeart size={25} className='hidden md:block' />
          <RiHandbagLine size={25} />
        </Center>
      </div>
    </header>
  );
}
