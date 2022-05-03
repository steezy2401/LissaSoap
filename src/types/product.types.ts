import { Sizes } from './size.types';

export interface IProduct {
  id: string;
  images: string[];
  name: string;
  description: string;
  price: number;
  currencySign?: string;
  hasDiscount?: boolean;
  lastPrice?: number;
  discountPercent?: number;
  imagePriority?: boolean;
  inStock?: boolean;
}

export interface ICartProduct {
  id: string;
  size: Sizes;
  quantity: number;
}

export type ProductProps = IProduct;
