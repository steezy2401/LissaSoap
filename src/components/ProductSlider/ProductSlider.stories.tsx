import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import ProductSlider from '@/components/ProductSlider/ProductSlider';

export default {
  title: 'Components/ProductSlider/ProductSlider',
  component: ProductSlider,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof ProductSlider>;

const Template: ComponentStory<typeof ProductSlider> = (args) => (
  <ProductSlider>{args.children}</ProductSlider>
);

export const Default = Template.bind({});

const products = [
  {
    id: '1',
    name: 'Bomb',
    description: 'Purple, Vanilla',
    price: 110,
    slug: 'bomb',
    hasDiscount: false,
    image: 'https://i.ibb.co/qF5sWLh/bomb-big.png',
  },
];

Default.args = {
  children: products.map((item, key) => (
    <ProductSlider.Item
      key={`${item.id}-${item.slug}-${key}`}
      id={item.id}
      name={item.name}
      slug={item.slug}
      image={item.image}
      description={item.description}
      price={item.price}
      hasDiscount={item.hasDiscount}
      index={key}
    />
  )),
};
