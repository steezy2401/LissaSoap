import { IDropdownItems, TOrderItems, TPick, TRange } from './dropdown.types';

export interface IFiltersHandler {
  handleSearch: (query: string) => void;
  handleOrder: (order: TOrderItems) => void;
  handleFlavorsPick: (pick: TPick[]) => void;
  handleCollectionPick: (pick: TPick[]) => void;
  handleColorPick: (pick: TPick[]) => void;
  handleRangePick: (values: TRange) => void;
}

export interface IFiltersSectionDesktop {
  searchQuery: string;
  colors: IDropdownItems[];
  pickedColor: TPick[];
  collections: IDropdownItems[];
  pickedCollection: TPick[];
  flavors: IDropdownItems[];
  pickedFlavors: TPick[];
  priceRange: TRange;
  orderItems: TOrderItems[];
  filtersHandler: IFiltersHandler;
  clearFilters: () => void;
}

export type IFiltersSectionMobile = Omit<IFiltersSectionDesktop, 'searchQuery'>;

export interface IFilters {
  searchQuery: string;
  flavors: TPick[];
  collections: TPick[];
  colors: TPick[];
  price: TRange;
  order: TOrderItems;
}
