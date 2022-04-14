import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FiltersRange from '@/components/filters/FiltersRange/FiltersRange';

export default {
  title: 'Components/Filters/FiltersRange/FiltersRange',
  component: FiltersRange,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof FiltersRange>;

const Template: ComponentStory<typeof FiltersRange> = (args) => (
  <FiltersRange {...args} />
);

export const Default = Template.bind({});
Default.args = {
  range: { min: 0, max: 300 },
};
