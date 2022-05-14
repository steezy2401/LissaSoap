import { IProductWithCover } from '@/types/product.types';

interface ISlide {
  id: number;
  name: string;
  showCounter: boolean;
  products: IProductWithCover[];
}

export default interface ISlider {
  id: number;
  slider: ISlide[];
}
