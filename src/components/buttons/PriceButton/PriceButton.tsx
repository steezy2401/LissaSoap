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

    const loaderVariants = {
      initial: {
        y: 20,
        x: '-50%',
        opacity: 0,
      },
      show: {
        x: '-50%',
        y: '-50%',
        opacity: 1,
        transition: {
          delay: 0.2,
        },
      },
      exit: {
        y: -50,
        opacity: 0,
        transition: {
          y: {
            delay: 0.1,
          },
        },
      },
    };

    return (
      <div
        className={clsxm(
          'relative flex h-20 flex-row',
          fullWidth ? 'w-full' : 'w-fit',
          className
        )}
      >
        <AnimatePresence>
          <motion.div
            key='pricebutton-price'
            layout
            className={clsxm(
              'flex w-1/2 justify-center rounded-2xl rounded-r-none border-[3px] border-solid border-white font-primary'
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
                'flex w-full items-center justify-center ',
                isLoading ? 'cursor-wait' : ''
              )}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                onClick && onClick(e);
              }}
              {...rest}
            >
              <div className='z-2 relative h-full w-full overflow-hidden whitespace-nowrap font-primary text-xl font-bold text-black'>
                <AnimatePresence>
                  {!isLoading && (
                    <motion.span
                      variants={loaderVariants}
                      className='absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center'
                      initial='initial'
                      animate='show'
                      exit='exit'
                    >
                      {children}
                    </motion.span>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {isLoading && (
                    <motion.span
                      variants={loaderVariants}
                      className='absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center'
                      initial='initial'
                      animate='show'
                      exit='exit'
                    >
                      <Loader size='md' color='dark' />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);

export default PriceButton;
