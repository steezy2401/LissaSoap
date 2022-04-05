import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Tabs from '@/components/elements/Tabs/Tabs';

export default {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'New', showCounter: true, counter: 8, active: true },
    { title: 'Popular', showCounter: true, counter: 17 },
  ],
  tabChangeAction: (index: number) => void index,
};
