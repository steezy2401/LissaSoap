import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FiltersDropdown from '@/components/filters/FiltersDropdown/FiltersDropdown';

export default {
  title: 'Components/Filters/FiltersDropdown/FiltersDropdown',
  component: FiltersDropdown,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof FiltersDropdown>;

const Template: ComponentStory<typeof FiltersDropdown> = (args) => (
  <FiltersDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Dropdown',
};
