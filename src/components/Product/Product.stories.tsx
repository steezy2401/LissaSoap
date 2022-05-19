import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Product from '@/components/Product';

export default {
  title: 'Components/Product',
  component: Product,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Bomb',
  description: 'Purple, Vanilla',
  price: 120,
  image: 'https://i.ibb.co/qF5sWLh/bomb-big.png',
};

export const Discount = Template.bind({});
Discount.args = {
  ...Default.args,
  hasDiscount: true,
  price: 120,
  discountPrice: 99,
};
