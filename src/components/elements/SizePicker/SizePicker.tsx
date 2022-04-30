import { SegmentedControl } from '@mantine/core';
import React, { useState } from 'react';

type Sizes = 'sm' | 'md' | 'lg';

interface SizePickerProps {
  defaultValue: Sizes;
  changeHandler: (value: Sizes) => void;
}

export default function SizePicker({
  defaultValue,
  changeHandler,
}: SizePickerProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (value: Sizes) => {
    setValue(value);
    changeHandler(value);
  };

  return (
    <SegmentedControl
      value={value}
      onChange={handleChange}
      styles={{
        root: {
          border: '2px solid #293FFF',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        },
        label: {
          color: '#F8F8FF',
          fontSize: '1.1rem',
          lineHeight: '1.1rem',
          fontWeight: '500',
          padding: '0.5em 1em',
        },
        active: {
          backgroundColor: 'rgba(255, 255, 255, 0.07)',
        },
      }}
      radius='lg'
      data={[
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ]}
    />
  );
}
