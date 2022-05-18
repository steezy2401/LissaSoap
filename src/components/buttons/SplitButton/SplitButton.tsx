import { Loader } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { buttonVariants, loaderVariants } from './SplitButton.motion';

type ButtonProps = {
  isLoading?: boolean;
  info?: number;
  currencySign?: string;
  fullWidth?: boolean;
  disabled?: boolean;
} & React.ComponentPropsWithRef<'button'>;

const SplitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      isLoading,
      fullWidth,
      children,
      onClick,
      info,
      disabled = false,
      currencySign = '€',
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={clsxm(
          'relative flex h-20 min-w-[20em] flex-row',
          fullWidth ? 'w-full' : 'w-fit',
          className
        )}
      >
        <AnimatePresence>
          <motion.div
            key='pricebutton-price'
            layout
            className={clsxm(
              'flex w-1/2 justify-center rounded-2xl rounded-r-none border-[3px] border-solid border-white font-primary',
              disabled ? 'border-gray' : ''
            )}
          >
            <span
              className={clsxm(
                'inline-flex items-center whitespace-nowrap text-xl font-semibold text-white',
                disabled ? 'text-gray' : ''
              )}
            >
              {currencySign} {info}
            </span>
          </motion.div>
          <motion.div
            layout
            key='pricebutton-button'
            variants={buttonVariants}
            initial='initial'
            whileHover={!isLoading && !disabled ? 'hover' : ''}
            whileTap={!isLoading && !disabled ? 'click' : ''}
            className={clsxm(
              'flex w-1/2 justify-center rounded-2xl rounded-l-none border-[3px] border-l-0 border-solid border-white bg-white',
              !isLoading ? 'slow-transition' : '',
              disabled ? 'border-gray bg-gray' : ''
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
              <div
                className={clsxm(
                  'z-2 relative h-full w-full overflow-hidden whitespace-nowrap font-primary text-xl font-bold text-black',
                  disabled ? 'text-lightGray' : ''
                )}
              >
                <AnimatePresence>
                  {!isLoading && (
                    <motion.span
                      variants={loaderVariants}
                      className='absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center'
                      initial='initial'
                      animate='show'
                      exit='exit'
                    >
                      {!disabled ? children : 'Out of stock'}
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

export default SplitButton;
