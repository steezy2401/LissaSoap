import React from 'react';

import { TPick } from '@/types/dropdown.types';

export default function FiltersArrayPicker({
  items,
  children,
}: {
  items: TPick[] | undefined;
  children: React.ReactNode;
}) {
  if (items == undefined || items.length <= 0) return <></>;

  return (
    <div className='flex flex-row gap-3'>
      <span className='text-[#979797]'>{children}</span>
      <div className='flex gap-2'>
        {items.map((value, index) => (
          <span key={`${value.title}+${value.id}+${index}`}>
            <span>{value.title}</span>
            {index != items.length - 1 && <span>, </span>}
          </span>
        ))}
      </div>
      <span>/</span>
    </div>
  );
}
