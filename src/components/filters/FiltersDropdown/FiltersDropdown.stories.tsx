import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FiltersDropdown from '@/components/filters/FiltersDropdown';
import FiltersPicker from '@/components/filters/FiltersPicker';
import FiltersRange from '@/components/filters/FiltersRange';
import SettingsIcon from '@/components/Icon/SettingsIcon';

export default {
  title: 'Components/Filters/FiltersDropdown',
  component: FiltersDropdown,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof FiltersDropdown>;

const flavors = [
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
];

const Template: ComponentStory<typeof FiltersDropdown> = (args) => (
  <FiltersDropdown {...args} />
);

export const Picker = Template.bind({});
Picker.args = {
  label: 'Picker',
  children: <FiltersPicker dropdownItems={flavors} />,
};

export const Range = Template.bind({});
Range.args = {
  label: 'Range',
  Icon: SettingsIcon,
  children: <FiltersRange range={{ min: 0, max: 300 }} />,
};
