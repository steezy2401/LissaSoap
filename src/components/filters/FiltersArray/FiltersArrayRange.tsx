import React from 'react';

import { TRange } from '@/types/dropdown.types';

export default function FiltersArrayRange({ range }: { range: TRange }) {
  if (range == undefined) return <span></span>;

  return (
    <div className='flex flex-row gap-3'>
      <div className='flex gap-2'>
        <span className='text-[#979797]'>From: </span>
        <span>€ {range.min}</span>
      </div>
      <div className='flex gap-2'>
        <span className='text-[#979797]'>To: </span>
        <span>€ {range.max}</span>
      </div>
    </div>
  );
}
