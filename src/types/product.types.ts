import { Sizes } from './size.types';

export interface IImages {
  id: number;
  attributes: { url: string };
}

interface IColor {
  name: string;
  color: string;
}

interface IVariants {
  id: number;
  images: { data: IImages[] };
  color: { data: Array<{ id: number; attributes: IColor }> };
}

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
  inStock?: boolean;
  variants: Array<IVariants>;
}

export interface ICartProduct {
  id: string;
  size: Sizes;
  quantity: number;
}

export type ProductProps = IProduct;
