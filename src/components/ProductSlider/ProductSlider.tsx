import React, { useState } from 'react';

import ProducSliderRow from '@/components/ProductSlider/ProductSliderRow';
import Tabs from '@/components/Tabs/Tabs';

import ProductProps from '@/types/typesProduct';
import TabProps from '@/types/typesTab';

type Sections = {
  title: string;
  items: ProductProps[];
};

interface ProductSliderProps {
  tabs: TabProps[];
  sections: Array<Sections>;
}

export default function ProductSlider({ tabs, sections }: ProductSliderProps) {
  const [activeSection, setActiveSection] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div className='w-full'>
      <div className='flex items-center justify-center'>
        <Tabs items={tabs} tabChangeAction={handleTabChange} />
      </div>
      <div>
        {sections.map(({ items }, index) => (
          <ProducSliderRow
            key={`slider-${index}`}
            active={index == activeSection}
            items={items}
          />
        ))}
      </div>
    </div>
  );
}
