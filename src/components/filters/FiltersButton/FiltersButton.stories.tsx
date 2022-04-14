import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FiltersButton from '@/components/filters/FiltersButton/FiltersButton';
import GearIcon from '@/components/icons/GearIcon';

export default {
  title: 'Components/Filters/FiltersButton/FiltersButton',
  component: FiltersButton,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof FiltersButton>;

const Template: ComponentStory<typeof FiltersButton> = (args) => (
  <FiltersButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Filters',
  Icon: GearIcon,
};
