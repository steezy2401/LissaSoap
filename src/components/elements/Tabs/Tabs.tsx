import React, { useState } from 'react';

import Tab from '@/components/elements/Tab/Tab';

import TabProps from '@/types/tab.types';

interface TabsProps {
  items: TabProps[];
  tabChangeAction: (index: number) => void;
}

export default function Tabs({ items, tabChangeAction }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const switchTab = (index: number) => {
    setActiveTab(index);
    tabChangeAction(index);
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
