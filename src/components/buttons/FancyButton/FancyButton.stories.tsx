import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FancyButton from '@/components/buttons/FancyButton/FancyButton';
import GearIcon from '@/components/icons/GearIcon';

export default {
  title: 'Components/Buttons/FancyButton/FancyButton',
  component: FancyButton,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof FancyButton>;

const Template: ComponentStory<typeof FancyButton> = (args) => (
  <FancyButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Filters',
  icon: <GearIcon size={27} />,
  disabled: true,
};
