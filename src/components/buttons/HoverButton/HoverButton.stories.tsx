import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import HoverButton from '@/components/buttons/HoverButton';

export default {
  title: 'Components/Buttons/HoverButton',
  component: HoverButton,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof HoverButton>;

const Template: ComponentStory<typeof HoverButton> = (args) => (
  <HoverButton {...args}>Add to cart</HoverButton>
);

export const Default = Template.bind({});
Default.args = { state: true };
