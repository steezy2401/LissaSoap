type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  currencySign?: string;
  hasDiscount?: boolean;
  lastPrice?: number;
  discountPercent?: number;
  imagePriority?: boolean;
};

export default ProductProps;
