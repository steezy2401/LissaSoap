import { TOrderItems, TRange } from './dropdown.types';

export interface IFilters {
  searchQuery: string;
  flavors: string[];
  collections: string[];
  colors: string[];
  price: TRange;
  order: TOrderItems;
}
