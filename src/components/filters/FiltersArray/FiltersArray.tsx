import React from 'react';

import FiltersArrayPicker from './FiltersArrayPicker';
import FiltersArrayRange from './FiltersArrayRange';

import { IFilters } from '@/types/filters.types';

export default function FiltersArray({
  colors,
  collections,
  flavors,
  price,
}: Omit<IFilters, 'searchQuery' | 'order'>) {
  return (
    <div className='flex flex-row flex-wrap gap-4'>
      <FiltersArrayPicker items={colors}>Colors: </FiltersArrayPicker>
      <FiltersArrayPicker items={collections}>Collections: </FiltersArrayPicker>
      <FiltersArrayPicker items={flavors}>Flavors: </FiltersArrayPicker>
      <FiltersArrayRange range={price} />
    </div>
  );
}
