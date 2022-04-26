import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import SettingsIcon from '@/components/icons/SettingsIcon';

import { orderItems } from '@/static/order.static';
import { sliderValues } from '@/static/slider.static';

import FiltersArray from '../FiltersArray/FiltersArray';
import FiltersColor from '../FiltersColor/FiltersColor';
import FiltersDrawer from '../FiltersDrawer/FiltersDrawer';
import FiltersDropdown from '../FiltersDropdown/FiltersDropdown';
import FiltersPicker from '../FiltersPicker/FiltersPicker';
import FiltersRange from '../FiltersRange/FiltersRange';
import FiltersSearch from '../FiltersSearch/FiltersSearch';
import FiltersSort from '../FiltersSort/FiltersSort';

import { FiltersBarProps, TOrderItems, TPick } from '@/types/dropdown.types';

export default function FiltersBar({
  handleFilters = () => void 1,
  flavors,
  collections,
  colors,
}: FiltersBarProps) {
  const matches = useMediaQuery('(min-width: 1280px)');

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pickedFlavors, setPickedFlavor] = useState<TPick[]>([]);
  const [pickedCollection, setPickedCollection] = useState<TPick[]>([]);
  const [pickedColor, setPickedColor] = useState<TPick[]>([]);
  const [priceRange, setPriceRange] = useState(sliderValues);
  const [order, setOrder] = useState<TOrderItems>({} as TOrderItems);

  // Handle filter change
  useEffect(() => {
    const filters = {
      searchQuery: searchQuery,
      flavors: pickedFlavors,
      collections: pickedCollection,
      colors: pickedColor,
      price: priceRange,
      order: order,
    };
    handleFilters(filters);
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

  const handleFlavorsPick = (ids: TPick[]) => {
    setPickedFlavor(ids);
  };

  const handleCollectionPick = (ids: TPick[]) => {
    setPickedCollection(ids);
  };

  const handleColorPick = (ids: TPick[]) => {
    setPickedColor(ids);
  };

  const handleRangePick = (values: { min: number; max: number }) => {
    setPriceRange(values);
  };

  return (
    <div>
      <div>
        {!matches ? (
          <div className='flex flex-row justify-between'>
            <FiltersDrawer>
              <div className='px-4'>
                <h2>Price</h2>
                <FiltersRange range={priceRange} handlePick={handleRangePick} />
                <h2>Color</h2>
                <FiltersColor
                  dropdownItems={colors}
                  handlePick={handleColorPick}
                  defaultPick={pickedColor}
                />
                <h2>Collection</h2>
                <FiltersPicker
                  dropdownItems={collections}
                  handlePick={handleCollectionPick}
                  defaultPick={pickedCollection}
                />
                <h2>Flavors</h2>
                <FiltersPicker
                  dropdownItems={flavors}
                  handlePick={handleFlavorsPick}
                  defaultPick={pickedFlavors}
                />
              </div>
            </FiltersDrawer>
            <div className='flex justify-center'>
              <FiltersSort orderItems={orderItems} handlePick={handleOrder} />
            </div>
          </div>
        ) : (
          <div>
            <div className=' flex flex-row justify-between'>
              <div className='flex flex-row gap-4'>
                <FiltersSearch
                  query={searchQuery}
                  handleSearch={setSearchQuery}
                />
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
                <div
                  onClick={() => void 1}
                  className='ml-2 flex cursor-pointer items-center justify-center'
                >
                  <span>
                    <FiTrash2 size={20} />
                  </span>
                </div>
              </div>
              <div className='flex justify-center'>
                <FiltersSort orderItems={orderItems} handlePick={handleOrder} />
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
        )}
      </div>
    </div>
  );
}
