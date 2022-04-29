import { Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type CustomCrumbs = {
  href: string;
  title: string;
};

interface BreadcrumbsProps {
  customCrumbs?: CustomCrumbs[];
}

export default function Breadcrumbs({ customCrumbs }: BreadcrumbsProps) {
  const router = useRouter();

  const breadcrumbs = React.useMemo(
    function generateBreadcrumbs() {
      let crumblist: CustomCrumbs[] = [];

      if (customCrumbs == undefined) {
        const asPathWithoutQuery = router.asPath.split('?')[0];
        const asPathNestedRoutes = asPathWithoutQuery
          .split('/')
          .filter((v) => v.length > 0);

        crumblist = asPathNestedRoutes.map((subpath, idx) => {
          const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
          return {
            href,
            title: subpath.charAt(0).toUpperCase() + subpath.slice(1),
          };
        });
      } else {
        crumblist = customCrumbs;
      }

      return [{ href: '/', title: 'Home' }, ...crumblist].map((item, index) => (
        <Link href={item.href} key={index}>
          <a className='text-lg text-white no-underline'>{item.title}</a>
        </Link>
      ));
    },
    [router.asPath, customCrumbs]
  );

  return (
    <MantineBreadcrumbs
      styles={{
        separator: {
          color: 'white',
          fontSize: '1.125rem',
          lineHeight: 'line-height: 1.75rem',
        },
      }}
    >
      {breadcrumbs}
    </MantineBreadcrumbs>
  );
}
