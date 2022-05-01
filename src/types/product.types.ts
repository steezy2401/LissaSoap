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

export type ProductProps = IProduct;
