import React from 'react';

import { DropdownRangeProps } from '@/types/dropdown.types';

type FiltersRangeProps = Omit<DropdownRangeProps, 'variant'>;

export default function FiltersRange({
  // eslint-disable-next-line unused-imports/no-unused-vars
  sliderValues,
  // eslint-disable-next-line unused-imports/no-unused-vars
  handlePick,
}: FiltersRangeProps) {
  return <div>FiltersRange</div>;
}
