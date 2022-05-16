import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import AddToCart from '@/components/buttons/AddToCart';

export default {
  title: 'Components/Buttons/AddToCart',
  component: AddToCart,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof AddToCart>;

const Template: ComponentStory<typeof AddToCart> = (args) => (
  <AddToCart {...args} />
);

export const Default = Template.bind({});
Default.args = { state: true };
