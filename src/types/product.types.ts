import { Sizes } from './size.types';

export interface IImages {
  id: number;
  url: string;
}

interface IColor {
  id: number;
  name: string;
  color: string;
}

interface IVariants {
  id: number;
  title: string;
  images: IImages[];
  color: IColor;
}

interface IInfo {
  id: number;
  title: string;
  fields: Array<{ title: string; text: string }>;
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
}

export interface IProductFull extends IProduct {
  variants: IVariants[];
  information: IInfo[];
}

export interface ICartProduct {
  id: string;
  size: Sizes;
  quantity: number;
}

export type ProductProps = IProduct;
