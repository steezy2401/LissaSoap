import { IFilters } from '@/types/filters.types';
import { IconProps } from '@/types/icon.types';

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

export interface DropdownDefaultProps
  extends React.ComponentPropsWithoutRef<'button'> {
  animateIcon?: boolean;
  Icon?: React.ComponentType<IconProps>;
  itemsPosition?: ItemsPosition;
}

export interface DropdownPickerProps extends DropdownDefaultProps {
  variant: 'picker';
  handlePick?: (id: string[]) => void;
  dropdownItems: IDropdownItems[];
}

export interface DropdownColorProps extends DropdownDefaultProps {
  variant: 'color';
  handlePick?: (id: string[]) => void;
  dropdownItems: IDropdownItems[];
}

export interface DropdownRangeProps extends DropdownDefaultProps {
  variant: 'range';
  range?: TRange;
  handlePick?: (values: { min: number; max: number }) => void;
}

export type DropdownProps =
  | DropdownPickerProps
  | DropdownRangeProps
  | DropdownColorProps;
