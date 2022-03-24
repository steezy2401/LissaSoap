import ProductProps from '@/types/product.types';
import TabsProps from '@/types/tab.types';

interface Sections {
  title: string;
  items: Array<ProductProps>;
}

export default interface Slider {
  tabs: Array<TabsProps>;
  sections: Array<Sections>;
}
