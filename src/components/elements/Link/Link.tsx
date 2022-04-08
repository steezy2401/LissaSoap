import NextLink from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

type LinkVariants = 'default' | 'highlight';

interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  variant?: LinkVariants;
  href: string;
}

const Link = ({
  className,
  variant = 'default',
  children,
  href,
  ...rest
}: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <a
        className={clsxm(
          'bg-gradient-to-r from-white to-white align-middle text-lg font-bold no-underline',
          variant == 'highlight'
            ? 'text-gradient-animation'
            : 'slidingLink text-white ',
          className
        )}
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
