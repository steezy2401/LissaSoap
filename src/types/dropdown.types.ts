import { IconProps } from '@/types/icon.types';

export interface IDropdownItems {
  id?: string;
  color?: string;
  title?: string;
  description?: string;
  icon?: string;
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
  activeItems?: string[];
  handlePick?: (id: string) => void;
  dropdownItems: IDropdownItems[];
}

export interface DropdownColorProps extends DropdownDefaultProps {
  variant: 'color';
  activeItems?: string[];
  handlePick?: (id: string) => void;
  dropdownItems: IDropdownItems[];
}

export interface DropdownRangeProps extends DropdownDefaultProps {
  variant: 'range';
  range?: { min: number; max: number };
  handlePick?: (values: { min?: number; max?: number }) => void;
}

export type DropdownProps =
  | DropdownPickerProps
  | DropdownRangeProps
  | DropdownColorProps;
