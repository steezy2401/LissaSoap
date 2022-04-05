import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Product from '@/components/elements/Product/Product';

export default {
  title: 'Components/Product/Product',
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
Default.args = { name: 'Bomb', description: 'Purple, Vanilla', price: 120 };

export const Discount = Template.bind({});
Discount.args = {
  ...Default.args,
  hasDiscount: true,
  lastPrice: 150,
  discountPercent: 25,
};
