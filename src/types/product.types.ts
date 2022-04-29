export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  currencySign?: string;
  hasDiscount?: boolean;
  lastPrice?: number;
  discountPercent?: number;
  imagePriority?: boolean;
}

export type ProductProps = IProduct;
