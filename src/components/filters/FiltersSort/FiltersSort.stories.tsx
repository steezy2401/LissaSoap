import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FiltersSort from '@/components/filters/FiltersSort';

export default {
  title: 'Components/Filters/FiltersSort',
  component: FiltersSort,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof FiltersSort>;

const Template: ComponentStory<typeof FiltersSort> = (args) => (
  <FiltersSort {...args} />
);

export const Default = Template.bind({});
Default.args = {
  orderItems: [
    { field: 'name', title: 'Name', type: 'INC' },
    { field: 'price', title: 'Price', type: 'DESC' },
  ],
};
