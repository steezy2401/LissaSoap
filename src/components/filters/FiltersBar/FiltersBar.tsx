import React, { useState } from 'react';

import SettingsIcon from '@/components/icons/SettingsIcon';

import FiltersDropdown from '../FiltersDropdown/FiltersDropdown';

const flavors = [
  { id: '1', title: 'Apple', description: 'Smooth apple smell', icon: '111' },
  {
    id: '2',
    title: 'Orange',
    description: 'Smooth orange smell',
    icon: '111',
  },
  { id: '3', title: 'Rose', description: 'Smooth rose smell', icon: '111' },
  { id: '4', title: 'Mint', description: 'Smooth mint smell', icon: '111' },
  {
    id: '5',
    title: 'Porfume',
    description: 'Smooth porfume smell',
    icon: '111',
  },
];

const collections = [
  { id: '1', title: 'Soap Bombs', description: 'Soap in shape of toy bombs' },
  { id: '2', title: 'Bubble gaming', description: 'Games related soap' },
];

const colors = [
  { id: '1', color: '#4E0A82', description: 'Tokyo' },
  { id: '2', color: '#3D009F', description: 'Strong Indigo' },
  { id: '3', color: '#4759E6', description: 'Basic Blue' },
  { id: '4', color: '#96DFE4', description: 'Island Paradise' },
  { id: '5', color: '#A6D8F0', description: 'Waterspout ' },
  { id: '6', color: '#EE82EE', description: 'Digital Violet' },
  { id: '7', color: '#FF8B58', description: 'Mango Orange' },
  { id: '8', color: '#FEB545', description: 'Tangy' },
  { id: '9', color: '#F5AC3B', description: 'Classic Saffron' },
  { id: '10', color: '#CE3226', description: 'Red Beauty' },
  { id: '11', color: '#EE2516', description: 'Strong Vermillion' },
];

const sliderValues = {
  min: 50,
  max: 200,
};

export default function FiltersBar() {
  const [pickedFlavors, setPickedFlavor] = useState<string[]>([]);

  const [pickedCollection, setPickedCollection] = useState<string[]>([]);

  const [pickedColor, setPickedColor] = useState<string[]>([]);

  const [priceRange, setPriceRange] = useState(sliderValues);

  const filterArray = (arr: string[], val: string) => {
    if (arr.length == 0) return [val];
    if (arr.includes(val))
      return arr.filter(function (value) {
        return value != val;
      });
    return [...arr, val];
  };

  const handleFlavorsPick = (id: string) => {
    setPickedFlavor((prev) => filterArray(prev, id));
  };

  const handleCollectionPick = (id: string) => {
    setPickedCollection((prev) => filterArray(prev, id));
  };

  const handleColorPick = (id: string) => {
    setPickedColor((prev) => filterArray(prev, id));
  };

  const handleRangePick = (values: { min?: number; max?: number }) => {
    setPriceRange((oldValues) => {
      let min: number = (values.min && values.min) || oldValues.min;
      const max: number = (values.max && values.max) || oldValues.max;

      if (max < min) min = max;

      return {
        min,
        max,
      };
    });
  };

  return (
    <div className='flex flex-row gap-4'>
      <FiltersDropdown
        variant='color'
        dropdownItems={colors}
        handlePick={handleColorPick}
        activeItems={pickedColor}
      >
        Color
      </FiltersDropdown>
      <FiltersDropdown
        variant='picker'
        dropdownItems={collections}
        handlePick={handleCollectionPick}
        activeItems={pickedCollection}
      >
        Collection
      </FiltersDropdown>
      <FiltersDropdown
        variant='picker'
        dropdownItems={flavors}
        handlePick={handleFlavorsPick}
        activeItems={pickedFlavors}
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
  );
}
