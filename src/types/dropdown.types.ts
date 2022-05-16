import React from 'react';

import { IFilters } from '@/types/filters.types';
import { IconProps } from '@/types/icon.types';

export type TPick = {
  id: string;
  title?: string;
};

export interface IDropdownItems {
  id?: string;
  color?: string;
  title?: string;
  description?: string;
  icon?: string;
}

export type TRange = {
  min: number;
  max: number;
};

export type TOrderItems = {
  field: string;
  title: string;
  type: 'INC' | 'DESC';
};

export interface FiltersBarProps {
  handleFilters?: (filters: IFilters) => void;
  flavors: IDropdownItems[];
  collections: IDropdownItems[];
  colors: IDropdownItems[];
}

export type ItemsPosition = 'rtl' | 'ltr';

export interface DropdownPickerProps {
  handlePick?: (pick: TPick[]) => void;
  dropdownItems: IDropdownItems[];
  defaultPick?: TPick[];
}

export interface DropdownColorProps {
  handlePick?: (pick: TPick[]) => void;
  dropdownItems: IDropdownItems[];
  defaultPick?: TPick[];
}

export interface DropdownRangeProps {
  range?: TRange;
  handlePick?: (values: { min: number; max: number }) => void;
  defaultRange?: TRange;
}

export interface DropdownProps
  extends React.ComponentPropsWithoutRef<'button'> {
  label: string;
  animateIcon?: boolean;
  Icon?: React.ComponentType<IconProps>;
  itemsPosition?: ItemsPosition;
  children: React.ReactNode;
}
