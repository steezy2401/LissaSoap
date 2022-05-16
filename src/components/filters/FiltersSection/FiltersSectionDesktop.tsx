import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import FiltersArray from '@/components/filters/FiltersArray';
import FiltersColor from '@/components/filters/FiltersColor';
import FiltersDropdown from '@/components/filters/FiltersDropdown';
import FiltersPicker from '@/components/filters/FiltersPicker';
import FiltersRange from '@/components/filters/FiltersRange';
import FiltersSearch from '@/components/filters/FiltersSearch';
import FiltersSort from '@/components/filters/FiltersSort';
import SettingsIcon from '@/components/icons/SettingsIcon';

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
          <FiltersDropdown label='Color'>
            <FiltersColor
              dropdownItems={colors}
              handlePick={filtersHandler.handleColorPick}
              defaultPick={pickedColor}
            />
          </FiltersDropdown>
          <FiltersDropdown label='Collection'>
            <FiltersPicker
              dropdownItems={collections}
              handlePick={filtersHandler.handleCollectionPick}
              defaultPick={pickedCollection}
            />
          </FiltersDropdown>
          <FiltersDropdown label='Flavor'>
            <FiltersPicker
              dropdownItems={flavors}
              handlePick={filtersHandler.handleFlavorsPick}
              defaultPick={pickedFlavors}
            />
          </FiltersDropdown>
          <FiltersDropdown label='Price range' Icon={SettingsIcon}>
            <FiltersRange
              range={priceRange}
              handlePick={filtersHandler.handleRangePick}
            />
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
