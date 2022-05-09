import { ColorSwatch, Tooltip } from '@mantine/core';
import React from 'react';

interface IVariant {
  title?: string;
  color: string;
  onClick?: () => void;
}

const VariantsItem = ({ title, color, onClick = () => void 1 }: IVariant) => {
  return (
    <Tooltip
      label={title}
      transition='pop'
      transitionDuration={300}
      openDelay={600}
      radius='lg'
      withArrow
    >
      <ColorSwatch
        className='cursor-pointer'
        key={color}
        color={color}
        radius='sm'
        onClick={() => {
          onClick && onClick();
        }}
      />
    </Tooltip>
  );
};

const VariantsPicker = ({ children }: { children: React.ReactNode }) => {
  return <div className='inline-flex gap-4'>{children}</div>;
};

VariantsPicker.Item = VariantsItem;

export default VariantsPicker;
