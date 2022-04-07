import NextLink from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

type LinkVariants = 'default' | 'highlight';

type LinkProps = {
  variant?: LinkVariants;
  href: string;
} & React.ComponentPropsWithRef<'a'>;

const Link = React.forwardRef<HTMLButtonElement, LinkProps>(
  ({ className, variant = 'default', children, href, ref, ...rest }) => {
    return (
      <NextLink href={href} passHref>
        <a
          ref={ref}
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
  }
);

export default Link;
