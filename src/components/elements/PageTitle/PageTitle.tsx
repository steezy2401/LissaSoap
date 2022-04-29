import React from 'react';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

interface PageTitleProps {
  title?: string;
}

export default function PageTitle({ title = '' }: PageTitleProps) {
  return (
    <div>
      <Breadcrumbs />
      <div className='mt-2 pl-5'>
        <span className='font-secondary text-6xl font-extrabold text-white md:text-7xl'>
          {title}
        </span>
      </div>
    </div>
  );
}
