import { Drawer, Space } from '@mantine/core';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button/Button';
import GearIcon from '@/components/icons/GearIcon';

import FiltersButton from '../FiltersButton/FiltersButton';

interface DrawerProps {
  children: React.ReactNode;
}

export default function FiltersDrawer({ children }: DrawerProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size='full'
        styles={{
          closeButton: { fontSize: '140px' },
          drawer: { backgroundColor: '#0B0B13', overflow: 'scroll' },
        }}
      >
        <h1 className='ml-4 text-4xl' id='drawer-title'>
          Filters
        </h1>
        <div id='drawer-body'>
          {children}
          <Space h='xl' />
          <div className='mt-6 mb-10 flex justify-center'>
            <Button className='w-4/5' onClick={() => setOpened(false)}>
              Apply
            </Button>
          </div>
        </div>
      </Drawer>

      <FiltersButton
        Icon={GearIcon}
        itemsPosition='rtl'
        onClick={() => setOpened(true)}
      >
        Filters
      </FiltersButton>
    </>
  );
}
