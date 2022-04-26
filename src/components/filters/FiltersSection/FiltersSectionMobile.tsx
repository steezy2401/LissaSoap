import React from 'react';

import FiltersColor from '../FiltersColor/FiltersColor';
import FiltersDrawer from '../FiltersDrawer/FiltersDrawer';
import FiltersPicker from '../FiltersPicker/FiltersPicker';
import FiltersRange from '../FiltersRange/FiltersRange';
import FiltersSort from '../FiltersSort/FiltersSort';

import { IFiltersSectionMobile } from '@/types/filters.types';

export default function FiltersSectionMobile({
  colors,
  pickedColor,
  collections,
  pickedCollection,
  flavors,
  pickedFlavors,
  priceRange,
  orderItems,
  filtersHandler,
  clearFilters,
}: IFiltersSectionMobile) {
  return (
    <div className='flex flex-row justify-between'>
      <FiltersDrawer clearFunction={clearFilters}>
        <div className='px-4'>
          <h2>Price</h2>
          <FiltersRange
            range={priceRange}
            handlePick={filtersHandler.handleRangePick}
          />
          <h2>Color</h2>
          <FiltersColor
            dropdownItems={colors}
            handlePick={filtersHandler.handleColorPick}
            defaultPick={pickedColor}
          />
          <h2>Collection</h2>
          <FiltersPicker
            dropdownItems={collections}
            handlePick={filtersHandler.handleCollectionPick}
            defaultPick={pickedCollection}
          />
          <h2>Flavors</h2>
          <FiltersPicker
            dropdownItems={flavors}
            handlePick={filtersHandler.handleFlavorsPick}
            defaultPick={pickedFlavors}
          />
        </div>
      </FiltersDrawer>
      <div className='flex justify-center'>
        <FiltersSort
          orderItems={orderItems}
          handlePick={filtersHandler.handleOrder}
        />
      </div>
    </div>
  );
}
