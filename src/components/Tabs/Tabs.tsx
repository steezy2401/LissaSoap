import React, { useState } from 'react';

import Tab from '@/components/Tab/Tab';

import TabProps from '@/types/typesTab';

interface TabsProps {
  items: TabProps[];
}

export default function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const switchTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className='flex gap-8'>
      {items.map(({ title, showCounter, counter }, index) => (
        <Tab
          title={title}
          showCounter={showCounter}
          counter={counter}
          active={index == activeTab}
          action={() => switchTab(index)}
          key={`tab-${title}${counter}`}
        />
      ))}
    </div>
  );
}
