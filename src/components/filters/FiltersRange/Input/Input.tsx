import { NumberInput } from '@mantine/core';
import React from 'react';

import { defaultValue } from './Input.static';

export default function Input({
  id,
  label,
  value,
  action,
  styles,
}: {
  id: string;
  label: string;
  value: number;
  action: (value: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles?: any;
}) {
  const handleBlur = (value: number) => {
    action(value);
  };

  return (
    <NumberInput
      id={id}
      min={defaultValue.min}
      max={defaultValue.max}
      value={value}
      onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleBlur(parseInt(e.target.value))
      }
      radius='md'
      hideControls
      icon={<div>{label}</div>}
      styles={styles}
    />
  );
}
