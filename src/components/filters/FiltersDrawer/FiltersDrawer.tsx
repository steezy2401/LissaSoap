import { Drawer, Space } from '@mantine/core';
import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import Button from '@/components/buttons/Button/Button';
import FiltersButton from '@/components/filters/FiltersButton';
import GearIcon from '@/components/Icon/GearIcon';

interface DrawerProps {
  clearFunction?: () => void;
  children: React.ReactNode;
}

export default function FiltersDrawer({
  children,
  clearFunction = () => void 1,
}: DrawerProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size='full'
        styles={{
          closeButton: { fontSize: '140px' },
          drawer: { backgroundColor: '#0b0c10', overflow: 'scroll' },
        }}
      >
        <div className='ml-4 flex gap-4' id='drawer-title'>
          <h1 className='text-4xl'>Filters</h1>
          <div
            onClick={() => {
              setOpened(false);
              clearFunction();
            }}
            className='ml-2 flex cursor-pointer items-center justify-center'
          >
            <span>
              <FiTrash2 size={30} />
            </span>
          </div>
        </div>
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
