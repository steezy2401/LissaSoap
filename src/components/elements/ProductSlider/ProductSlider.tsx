import React, { useState } from 'react';

import ProducSliderRow from '@/components/elements/ProductSlider/ProductSliderRow';
import Tabs from '@/components/elements/Tabs/Tabs';

import ProductProps from '@/types/product.types';
import TabProps from '@/types/tab.types';

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
      <div className='mb-[2vw] flex items-center justify-center'>
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
