import { RangeSlider } from '@mantine/core';
import React from 'react';

import { marks } from './Slider.static';

export default function Slider({
  value,
  action = () => void 1,
  endAction = () => void 1,
}: {
  value: [number, number];
  action: (value: [number, number]) => void;
  endAction: (value: [number, number]) => void;
}) {
  return (
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
      value={value}
      onChange={action}
      onChangeEnd={endAction}
    />
  );
}
