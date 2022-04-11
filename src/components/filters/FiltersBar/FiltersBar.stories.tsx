import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FiltersBar from '@/components/filters/FiltersBar/FiltersBar';

export default {
  title: 'Components/Filters/FiltersBar/FiltersBar',
  component: FiltersBar,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof FiltersBar>;

const Template: ComponentStory<typeof FiltersBar> = (args) => (
  <FiltersBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
