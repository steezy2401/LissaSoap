import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import SettingsIcon from '@/components/icons/SettingsIcon';

import FiltersArray from '../FiltersArray/FiltersArray';
import FiltersDropdown from '../FiltersDropdown/FiltersDropdown';
import FiltersSearch from '../FiltersSearch/FiltersSearch';
import FiltersSort from '../FiltersSort/FiltersSort';

import { IFiltersSectionDesktop } from '@/types/filters.types';

export default function FiltersSectionDesktop({
  searchQuery,
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
}: IFiltersSectionDesktop) {
  return (
    <div>
      <div className=' flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          <FiltersSearch
            query={searchQuery}
            handleSearch={filtersHandler.handleSearch}
          />
          <FiltersDropdown
            variant='color'
            dropdownItems={colors}
            handlePick={filtersHandler.handleColorPick}
            defaultPick={pickedColor}
          >
            Color
          </FiltersDropdown>
          <FiltersDropdown
            variant='picker'
            dropdownItems={collections}
            handlePick={filtersHandler.handleCollectionPick}
            defaultPick={pickedCollection}
          >
            Collection
          </FiltersDropdown>
          <FiltersDropdown
            variant='picker'
            dropdownItems={flavors}
            handlePick={filtersHandler.handleFlavorsPick}
            defaultPick={pickedFlavors}
          >
            Flavor
          </FiltersDropdown>
          <FiltersDropdown
            variant='range'
            range={priceRange}
            handlePick={filtersHandler.handleRangePick}
            Icon={SettingsIcon}
          >
            Price range
          </FiltersDropdown>
          <div
            onClick={() => clearFilters()}
            className='ml-2 flex cursor-pointer items-center justify-center'
          >
            <span>
              <FiTrash2 size={20} />
            </span>
          </div>
        </div>
        <div className='flex justify-center'>
          <FiltersSort
            orderItems={orderItems}
            handlePick={filtersHandler.handleOrder}
          />
        </div>
      </div>
      <div className='mt-7'>
        <FiltersArray
          colors={pickedColor}
          collections={pickedCollection}
          flavors={pickedFlavors}
          price={priceRange}
        />
      </div>
    </div>
  );
}
