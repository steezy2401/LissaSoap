import { Anchor, Burger, Center } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
import { RiHandbagLine } from 'react-icons/ri';

import HeaderLogo from '~/images/header_logo.png';

const links = [
  { href: '/', label: 'Soap', styleClass: '' },
  { href: '/', label: 'Collections', styleClass: '' },
  { href: '/', label: 'Custom', styleClass: 'text-gradient' },
];

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
            {links.map(({ href, label, styleClass }) => (
              <Anchor
                key={`${href}${label}`}
                href={href}
                className={`hidden align-middle text-lg font-bold text-white md:block ${styleClass}`}
              >
                {label}
              </Anchor>
            ))}
          </Center>
        </nav>
        {props.variant == 'default' && (
          <div className='static h-24 flex-none md:relative md:flex-1'>
            <Image
              src={HeaderLogo}
              alt='Picture of the author'
              objectFit='contain'
              layout='fill'
              quality={100}
              priority
            />
          </div>
        )}

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
