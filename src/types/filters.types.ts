import { TOrderItems, TPick, TRange } from './dropdown.types';

export interface IFilters {
  searchQuery: string;
  flavors: TPick[];
  collections: TPick[];
  colors: TPick[];
  price: TRange;
  order: TOrderItems;
}
