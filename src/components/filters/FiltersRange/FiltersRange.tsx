import { NumberInput, RangeSlider } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import { formatRange } from '@/lib/utils/formatRange';

import { DropdownRangeProps } from '@/types/dropdown.types';

type FiltersRangeProps = Omit<DropdownRangeProps, 'variant'>;

const marks = [
  { value: 50, label: '€ 50' },
  { value: 100, label: '€ 100' },
  { value: 150, label: '€ 150' },
  { value: 200, label: '€ 200' },
  { value: 250, label: '€ 250' },
];

const defaultValue = {
  min: 0,
  max: 300,
};

export default function FiltersRange({
  range = defaultValue,
  handlePick = () => void 1,
}: FiltersRangeProps) {
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
    <div className='rounded-xl bg-[#0B0B13] px-3 pb-7 pt-4 text-white'>
      <div className='flex w-full flex-col gap-7 xl:w-80'>
        <div className='flex justify-around gap-5'>
          <NumberInput
            id='minValue'
            min={defaultValue.min}
            max={defaultValue.max}
            value={(ranger && ranger.min) || 0}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDispRangerPick({ min: parseInt(e.target.value) })
            }
            radius='md'
            hideControls
            icon={<div>From</div>}
            styles={{
              icon: { paddingLeft: 15 },
              input: {
                textAlign: 'right',
                color: '#F8F8FF',
                fontSize: '1rem',
              },
            }}
          />
          <NumberInput
            id='maxValue'
            min={defaultValue.min}
            max={defaultValue.max}
            value={(ranger && ranger.max) || 300}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDispRangerPick({ max: parseInt(e.target.value) })
            }
            radius='md'
            hideControls
            icon={<div>To</div>}
            styles={{
              input: { textAlign: 'right', color: '#F8F8FF', fontSize: '1rem' },
            }}
          />
        </div>
        <RangeSlider
          styles={{
            label: {
              backgroundColor: '#F8F8FF',
              color: '#121212',
              top: -45,
            },
          }}
          radius='xl'
          min={0}
          color='violet'
          max={300}
          marks={marks}
          label={null}
          labelTransition='pop'
          labelTransitionDuration={150}
          labelTransitionTimingFunction='ease'
          value={ranger != undefined ? [ranger.min, ranger.max] : [0, 300]}
          onChange={(value) =>
            handleRangerPick({ min: value[0], max: value[1] })
          }
          onChangeEnd={(value) =>
            handleDispRangerPick({ min: value[0], max: value[1] })
          }
        />
      </div>
    </div>
  );
}
