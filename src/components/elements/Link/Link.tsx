import NextLink from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { IconProps } from '@/types/icon.types';

type LinkVariants = 'default' | 'highlight' | 'customize';

interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  variant?: LinkVariants;
  href: string;
  Icon?: React.ComponentType<IconProps>;
  animateIcon?: boolean;
}

const Link = ({
  className,
  variant = 'default',
  children,
  href,
  Icon,
  animateIcon = true,
  ...rest
}: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <a
        className={clsxm(
          'align-middle no-underline',
          variant == 'default'
            ? 'slidingLink bg-gradient-to-r from-white to-white '
            : '',
          className
        )}
        {...rest}
      >
        <span className='flex flex-row items-center gap-3'>
          {Icon != undefined && (
            <Icon size={25} color='white' animate={animateIcon} />
          )}
          <span
            className={clsxm(
              'text-lg font-semibold text-white',
              variant == 'highlight' ? 'text-gradient-animation' : '',
              variant == 'customize' ? 'text-gradient-customize' : ''
            )}
          >
            {children}
          </span>
        </span>
      </a>
    </NextLink>
  );
};

export default Link;
