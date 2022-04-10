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

export const Default = Template.bind({});
Default.args = {
  children: 'Dropdown',
};

export const Setting = Template.bind({});
Setting.args = {
  ...Default.args,
  children: 'Price range',
  Icon: SettingsIcon,
  animateIcon: false,
};
