import { NumberInput, RangeSlider } from '@mantine/core';
import React from 'react';

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
  // eslint-disable-next-line unused-imports/no-unused-vars
  range,
  // eslint-disable-next-line unused-imports/no-unused-vars
  handlePick = () => void 1,
}: FiltersRangeProps) {
  return (
    <div className='rounded-xl bg-[#0B0B13] px-3 pb-7 pt-4 text-white'>
      <div className='flex w-80 flex-col gap-7'>
        <div className='flex justify-around gap-5'>
          <NumberInput
            id='minValue'
            min={defaultValue.min}
            max={defaultValue.max}
            value={(range && range.min) || 0}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePick({ min: parseInt(e.target.value) })
            }
            formatter={(value) => {
              if (value == undefined) return '€ ';
              return !Number.isNaN(parseInt(value)) ? `€ ${value}` : '€ ';
            }}
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
            value={(range && range.max) || 300}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePick({ max: parseInt(e.target.value) })
            }
            formatter={(value) => {
              if (value == undefined) return '€ ';
              return !Number.isNaN(parseInt(value)) ? `€ ${value}` : '€ ';
            }}
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
          value={range != undefined ? [range.min, range.max] : [0, 300]}
          onChange={(value) => handlePick({ min: value[0], max: value[1] })}
        />
      </div>
    </div>
  );
}
