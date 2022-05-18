import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import SplitButton from '@/components/buttons/SplitButton';

export default {
  title: 'Components/Buttons/SplitButton',
  component: SplitButton,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof SplitButton>;

const Template: ComponentStory<typeof SplitButton> = (args) => (
  <SplitButton {...args} />
);

export const Default = Template.bind({});
Default.args = { children: 'Add to cart', info: 120, fullWidth: true };
