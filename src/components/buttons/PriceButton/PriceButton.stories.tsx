import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import PriceButton from '@/components/buttons/PriceButton/PriceButton';

export default {
  title: 'Components/Buttons/PriceButton/PriceButton',
  component: PriceButton,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof PriceButton>;

const Template: ComponentStory<typeof PriceButton> = (args) => (
  <PriceButton {...args} />
);

export const Default = Template.bind({});
Default.args = { children: 'Add to cart', price: 120, fullWidth: true };
