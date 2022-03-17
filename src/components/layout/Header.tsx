import { Anchor, Burger, Center } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
import { RiHandbagLine } from 'react-icons/ri';

import HeaderLogo from '~/images/header_logo.png';

const links = [
  { href: '/', label: 'Soap' },
  { href: '/', label: 'Collections' },
  { href: '/', label: 'Custom' },
];

export default function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header className='sticky top-0 z-50 rounded-b-2xl bg-gradient-to-br from-black'>
      <div className='flex h-20 items-center'>
        <nav className='mr-auto flex-1'>
          <Center inline className='flex content-center gap-8'>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size='md'
            />
            {links.map(({ href, label }) => (
              <Anchor
                key={`${href}${label}`}
                href={href}
                className='align-middle text-lg font-bold text-white'
              >
                {label}
              </Anchor>
            ))}
          </Center>
        </nav>
        <div className='relative h-24 flex-1'>
          <Image
            src={HeaderLogo}
            alt='Picture of the author'
            objectFit='contain'
            layout='fill'
            quality={100}
          />
        </div>

        <Center inline className='ml-auto flex flex-1 content-center gap-5'>
          <HiOutlineSearch size={25} />
          <HiOutlineUser size={25} />
          <AiOutlineHeart size={25} />
          <RiHandbagLine size={25} />
        </Center>
      </div>
    </header>
  );
}
