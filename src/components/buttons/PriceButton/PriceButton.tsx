import { Loader } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type ButtonProps = {
  isLoading?: boolean;
  price?: number;
  currencySign?: string;
  fullWidth?: boolean;
} & React.ComponentPropsWithRef<'button'>;

const PriceButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled,
      isLoading,
      fullWidth,
      children,
      onClick,
      price,
      currencySign = '€',
      ...rest
    },
    ref
  ) => {
    const buttonVariants = {
      initial: {
        scale: 1,
        borderRadius: '0rem 1rem 1rem 0rem',
      },
      hover: {
        scale: 1.2,
        borderRadius: '1rem 1rem 1rem 1rem',
      },
      click: {
        scale: 1,
        borderRadius: '0rem 1rem 1rem 0rem',
      },
      loading: {
        borderRadius: '1rem 1rem 1rem 1rem',
      },
    };

    return (
      <div
        className={clsxm(
          'relative flex flex-row',
          fullWidth ? 'w-full' : 'w-fit',
          className
        )}
      >
        <AnimatePresence>
          <motion.div
            key='pricebutton-price'
            layout
            className={clsxm(
              'flex w-1/2 justify-center rounded-2xl rounded-r-none border-[3px] border-solid border-white px-10 py-5 font-primary'
            )}
          >
            <span className='inline-flex items-center whitespace-nowrap text-xl font-semibold text-white'>
              {currencySign} {price}
            </span>
          </motion.div>

          <motion.div
            layout
            key='pricebutton-button'
            variants={buttonVariants}
            initial='initial'
            whileHover={!isLoading ? 'hover' : ''}
            whileTap={!isLoading ? 'click' : ''}
            className={clsxm(
              'flex w-1/2 justify-center rounded-2xl rounded-l-none border-[3px] border-l-0 border-solid border-white bg-white',
              !isLoading ? 'slow-transition' : ''
            )}
          >
            <button
              ref={ref}
              disabled={disabled || isLoading}
              className={clsxm(
                'flex w-full items-center justify-center px-10 py-5',
                isLoading ? 'cursor-wait' : ''
              )}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                onClick && onClick(e);
              }}
              {...rest}
            >
              <span className='z-2 relative inline-flex items-center whitespace-nowrap font-primary text-xl font-bold text-black'>
                {!isLoading ? <span>{children}</span> : <Loader color='dark' />}
              </span>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);

export default PriceButton;
