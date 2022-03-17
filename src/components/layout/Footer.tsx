import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import footerItems from '@/static/footerItems';

export default function Footer() {
  return (
    <footer className='b-0 flex flex-col gap-20 border-0 border-t-2 border-solid border-[#202020] bg-[#050505] px-9 pt-10 pb-4 text-[#979797]'>
      <div className='flex justify-between'>
        <div className='flex gap-20'>
          {footerItems.map(({ title, items }) => (
            <div className='flex flex-col gap-2' key={title}>
              <span className='text-lg font-bold'>{title}</span>
              <div className='flex flex-col gap-1 no-underline'>
                {items.map(({ title, link }) => (
                  <a
                    href={link}
                    className='text-[#979797] no-underline'
                    key={`${link}${title}`}
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className='flex cursor-pointer flex-col items-center text-[#979797]'
        >
          <IoIosArrowUp size={30} />
          Top
        </div>
      </div>
      <div className='flex gap-16'>
        <a className='text-[#979797] no-underline' href='#'>
          Terms & Conditions
        </a>
        <span>© 2022 LissaSoap, TM</span>
      </div>
    </footer>
  );
}
