import { Sizes } from './size.types';

interface IImageSmall {
  url: string;
}

interface IImageFormats {
  large: IImageSmall;
  small: IImageSmall;
  medium: IImageSmall;
  thumbnail: IImageSmall;
}

export interface IImage extends IImageSmall {
  id: number;
  formats: IImageFormats;
}

interface IColor {
  id: number;
  name: string;
  color: string;
}

interface IVariants {
  id: number;
  title: string;
  images: IImage[];
  color: IColor;
}

interface IInfo {
  id: number;
  title: string;
  fields: Array<{ title: string; text: string }>;
}

export interface IProduct {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  hasDiscount?: boolean;
  discountPercent?: number;
  inStock?: boolean;
}

export interface IProductSuggested extends IProduct {
  coverImage: IImage;
}

export interface IProductFull extends IProduct {
  variants: IVariants[];
  information: IInfo[];
  suggestedProducts: IProductSuggested[];
}

export interface ICartProduct {
  id: string;
  size: Sizes;
  quantity: number;
}

export type ProductProps = IProduct;
