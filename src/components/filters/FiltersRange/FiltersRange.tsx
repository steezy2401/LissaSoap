import React, { useEffect, useState } from 'react';

import { formatRange } from '@/lib/utils/formatRange';

import Input from './Input/Input';
import Slider from './Slider/Slider';

import { DropdownRangeProps } from '@/types/dropdown.types';

const defaultValue = {
  min: 0,
  max: 300,
};

export default function FiltersRange({
  range = defaultValue,
  handlePick = () => void 1,
}: DropdownRangeProps) {
  const [ranger, setRanger] = useState(range);

  // Final range that is being send back to a handler
  const [dispatchRange, setDispatchRange] = useState(range);

  const handleRangerPick = (values: { min?: number; max?: number }) => {
    setRanger((oldValues) => formatRange(values, oldValues));
  };

  const handleDispRangerPick = (values: { min?: number; max?: number }) => {
    setDispatchRange((oldValues) => formatRange(values, oldValues));
  };

  useEffect(() => {
    setRanger((oldValues) => formatRange(dispatchRange, oldValues));
    handlePick(dispatchRange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatchRange]);

  return (
    <div className='w-fit rounded-xl bg-[#0B0B13] px-3 pb-7 pt-4 text-white'>
      <div className='flex w-full flex-col gap-7 xl:w-80'>
        <div className='flex justify-around gap-5'>
          <Input
            label='From'
            id='minValue'
            value={(ranger && ranger.min) || 0}
            action={(value) => handleDispRangerPick({ min: value })}
            styles={{
              icon: { paddingLeft: 15 },
              input: {
                textAlign: 'right',
                color: '#F8F8FF',
                fontSize: '1rem',
              },
            }}
          />
          <Input
            id='maxValue'
            label='To'
            value={(ranger && ranger.max) || 300}
            action={(value) => handleDispRangerPick({ max: value })}
            styles={{
              input: { textAlign: 'right', color: '#F8F8FF', fontSize: '1rem' },
            }}
          />
        </div>
        <Slider
          value={ranger != undefined ? [ranger.min, ranger.max] : [0, 300]}
          action={(value) => handleRangerPick({ min: value[0], max: value[1] })}
          endAction={(value) =>
            handleDispRangerPick({ min: value[0], max: value[1] })
          }
        />
      </div>
    </div>
  );
}
