import React, { useEffect, useState } from 'react';

import SettingsIcon from '@/components/icons/SettingsIcon';

import { orderItems } from '@/static/order.static';
import { sliderValues } from '@/static/slider.static';

import FiltersDropdown from '../FiltersDropdown/FiltersDropdown';
import FiltersSearch from '../FiltersSearch/FiltersSearch';
import FiltersSort from '../FiltersSort/FiltersSort';

import { FiltersBarProps, TOrderItems } from '@/types/dropdown.types';

export default function FiltersBar({
  handleFilters,
  flavors,
  collections,
  colors,
}: FiltersBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pickedFlavors, setPickedFlavor] = useState<string[]>([]);
  const [pickedCollection, setPickedCollection] = useState<string[]>([]);
  const [pickedColor, setPickedColor] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(sliderValues);
  const [order, setOrder] = useState<TOrderItems>({} as TOrderItems);

  // Handle filter change
  useEffect(() => {
    handleFilters({
      searchQuery: searchQuery,
      flavors: pickedFlavors,
      collections: pickedCollection,
      colors: pickedColor,
      price: priceRange,
      order: order,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchQuery,
    pickedFlavors,
    pickedCollection,
    pickedColor,
    priceRange,
    order,
  ]);

  const handleOrder = (order: TOrderItems) => {
    setOrder(order);
  };

  const handleFlavorsPick = (ids: string[]) => {
    setPickedFlavor(ids);
  };

  const handleCollectionPick = (ids: string[]) => {
    setPickedCollection(ids);
  };

  const handleColorPick = (ids: string[]) => {
    setPickedColor(ids);
  };

  const handleRangePick = (values: { min: number; max: number }) => {
    setPriceRange(values);
  };

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-row gap-4'>
        <FiltersSearch query={searchQuery} handleSearch={setSearchQuery} />
        <FiltersDropdown
          variant='color'
          dropdownItems={colors}
          handlePick={handleColorPick}
        >
          Color
        </FiltersDropdown>
        <FiltersDropdown
          variant='picker'
          dropdownItems={collections}
          handlePick={handleCollectionPick}
        >
          Collection
        </FiltersDropdown>
        <FiltersDropdown
          variant='picker'
          dropdownItems={flavors}
          handlePick={handleFlavorsPick}
        >
          Flavor
        </FiltersDropdown>
        <FiltersDropdown
          variant='range'
          range={priceRange}
          handlePick={handleRangePick}
          Icon={SettingsIcon}
        >
          Price range
        </FiltersDropdown>
      </div>
      <div className='flex justify-center'>
        <FiltersSort orderItems={orderItems} handlePick={handleOrder} />
      </div>
    </div>
  );
}
