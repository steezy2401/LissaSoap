import React, { RefObject } from 'react';

export default function LearnMore({
  refToScroll,
}: {
  refToScroll: RefObject<HTMLButtonElement>;
}) {
  const executeScroll = () => {
    if (refToScroll.current !== null) {
      refToScroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className='flex cursor-pointer select-none flex-col gap-5'
      onClick={executeScroll}
    >
      <span className='text-lg'>Learn more...</span>
      <div className='mouse_scroll'>
        <div className='mouse hidden md:block'>
          <div className='wheel'></div>
        </div>
        <div>
          <span className='m_scroll_arrows unu'></span>
          <span className='m_scroll_arrows doi'></span>
          <span className='m_scroll_arrows trei'></span>
        </div>
      </div>
    </div>
  );
}
