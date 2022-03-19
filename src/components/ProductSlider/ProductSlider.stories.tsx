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
  <ProductSlider {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { title: 'New', showCounter: true, counter: 8, active: true },
    { title: 'Popular', showCounter: true, counter: 17 },
  ],
  sections: [
    {
      title: 'New',
      items: [
        { name: 'Bomb', description: 'Purple, Vanilla', price: 110 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
      ],
    },
    {
      title: 'Popular',
      items: [
        { name: 'Bomb', description: 'Purple, Vanilla', price: 110 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
      ],
    },
  ],
};
