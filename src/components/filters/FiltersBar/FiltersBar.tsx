import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';

import { orderItems } from '@/static/order.static';
import { sliderValues } from '@/static/slider.static';

import FiltersSectionDesktop from '../FiltersSection/FiltersSectionDesktop';
import FiltersSectionMobile from '../FiltersSection/FiltersSectionMobile';

import { FiltersBarProps, TOrderItems, TPick } from '@/types/dropdown.types';
import { IFiltersHandler } from '@/types/filters.types';

export default function FiltersBar({
  handleFilters = () => void 1,
  flavors,
  collections,
  colors,
}: FiltersBarProps) {
  // False if viewport is less than 1280px
  const matches = useMediaQuery('(min-width: 1280px)', false);

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

  const filtersHandler: IFiltersHandler = {
    handleSearch: (query) => setSearchQuery(query),
    handleOrder: (order) => setOrder(order),
    handleFlavorsPick: (pick) => setPickedFlavor(pick),
    handleCollectionPick: (pick) => setPickedCollection(pick),
    handleColorPick: (pick) => setPickedColor(pick),
    handleRangePick: (values) => setPriceRange(values),
  };

  const clearFilters = () => {
    setPickedFlavor([]);
    setPickedCollection([]);
    setPickedColor([]);
    setSearchQuery('');
    setPriceRange(sliderValues);
  };

  return (
    <div>
      <div>
        {!matches ? (
          <FiltersSectionMobile
            colors={colors}
            pickedColor={pickedColor}
            collections={collections}
            pickedCollection={pickedCollection}
            flavors={flavors}
            pickedFlavors={pickedFlavors}
            priceRange={priceRange}
            orderItems={orderItems}
            filtersHandler={filtersHandler}
            clearFilters={clearFilters}
          />
        ) : (
          <FiltersSectionDesktop
            searchQuery={searchQuery}
            colors={colors}
            pickedColor={pickedColor}
            collections={collections}
            pickedCollection={pickedCollection}
            flavors={flavors}
            pickedFlavors={pickedFlavors}
            priceRange={priceRange}
            orderItems={orderItems}
            filtersHandler={filtersHandler}
            clearFilters={clearFilters}
          />
        )}
      </div>
    </div>
  );
}
