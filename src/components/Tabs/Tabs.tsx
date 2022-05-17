import React, { Children, useState } from 'react';

import Tab from './Tab/Tab';

interface TabsProps {
  children: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const switchTab = (index: number) => {
    setActiveTab(index);
  };

  const tabs = Children.toArray(children) as React.ReactElement[];

  const panes = tabs.map((tab, index) =>
    React.cloneElement(tab, {
      key: index,
      active: activeTab === index,
      onClick: () => switchTab(index),
      showCounter: tab.props.showCounter,
      counter: tab.props.counter,
    })
  );

  const content = tabs[activeTab].props.children;

  return (
    <div className='w-full'>
      <div className='mb-[2vw] flex items-center justify-center'>
        <div className='flex gap-8'>{panes}</div>
      </div>
      <div>{content}</div>
    </div>
  );
};

Tabs.Tab = Tab;

export default Tabs;
