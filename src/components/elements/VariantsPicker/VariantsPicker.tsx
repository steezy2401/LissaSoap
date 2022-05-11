import { ColorSwatch, Tooltip } from '@mantine/core';
import React from 'react';

import clsxm from '@/lib/clsxm';

interface IVariant {
  title?: string;
  color: string;
  active?: boolean;
  onClick?: () => void;
}

const VariantsItem = ({
  title,
  color,
  active = false,
  onClick = () => void 1,
}: IVariant) => {
  return (
    <Tooltip
      label={title}
      transition='pop'
      transitionDuration={300}
      openDelay={600}
      radius='lg'
      withArrow
    >
      <div
        className={clsxm(
          'rounded-md border-2 border-solid p-1',
          active ? ' border-white' : 'border-transparent'
        )}
      >
        <ColorSwatch
          className='cursor-pointer '
          key={color}
          color={color}
          radius='sm'
          onClick={() => {
            onClick && onClick();
          }}
        />
      </div>
    </Tooltip>
  );
};

const VariantsPicker = ({ children }: { children: React.ReactNode }) => {
  return <div className='inline-flex justify-center gap-2'>{children}</div>;
};

VariantsPicker.Item = VariantsItem;

export default VariantsPicker;
