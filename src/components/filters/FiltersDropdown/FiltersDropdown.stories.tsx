import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FiltersDropdown from '@/components/filters/FiltersDropdown/FiltersDropdown';
import SettingsIcon from '@/components/icons/SettingsIcon';

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

export const Picker = Template.bind({});
Picker.args = {
  children: 'Picker',
  variant: 'picker',
  dropdownItems: [
    { id: '1', title: 'Apple', description: 'Smooth apple smell', icon: '111' },
    {
      id: '2',
      title: 'Orange',
      description: 'Smooth orange smell',
      icon: '111',
    },
    { id: '3', title: 'Rose', description: 'Smooth rose smell', icon: '111' },
    { id: '4', title: 'Mint', description: 'Smooth mint smell', icon: '111' },
    {
      id: '5',
      title: 'Porfume',
      description: 'Smooth porfume smell',
      icon: '111',
    },
  ],
};

export const Setting = Template.bind({});
Setting.args = {
  children: 'Price range',
  variant: 'range',
  range: { min: 20, max: 200 },
  Icon: SettingsIcon,
};
