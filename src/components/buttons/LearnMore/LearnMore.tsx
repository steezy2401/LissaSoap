import React, { RefObject } from 'react';

import clsxm from '@/lib/clsxm';

type LearnMoreProps = {
  refToScroll: RefObject<HTMLButtonElement>;
} & React.ComponentPropsWithRef<'div'>;

const LearnMore = React.forwardRef<HTMLButtonElement, LearnMoreProps>(
  ({ className, refToScroll }) => {
    const executeScroll = () => {
      if (refToScroll.current !== null) {
        refToScroll.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div
        className={clsxm(
          'flex cursor-pointer select-none flex-col gap-5',
          className
        )}
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
);

export default LearnMore;
