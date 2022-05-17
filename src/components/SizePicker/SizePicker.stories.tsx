import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import SizePicker from '@/components/SizePicker';

export default {
  title: 'Components/SizePicker',
  component: SizePicker,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof SizePicker>;

const Template: ComponentStory<typeof SizePicker> = (args) => (
  <SizePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {};
