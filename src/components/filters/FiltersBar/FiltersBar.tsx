import React, { useState } from 'react';

import FiltersDropdown from '../FiltersDropdown/FiltersDropdown';

const dropdownItems = [
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

export default function FiltersBar() {
  const [pickedFlavor, setPickedFlavor] = useState<undefined | string>(
    undefined
  );

  const handleFlavorsPick = (id?: string) => {
    setPickedFlavor(id);
  };

  return (
    <div className='flex flex-row gap-4'>
      <FiltersDropdown
        dropdownItems={dropdownItems}
        handlePick={handleFlavorsPick}
        activeItem={pickedFlavor}
      >
        Flavor
      </FiltersDropdown>
      <FiltersDropdown
        dropdownItems={dropdownItems}
        handlePick={handleFlavorsPick}
        activeItem={pickedFlavor}
      >
        Flavor
      </FiltersDropdown>
    </div>
  );
}
