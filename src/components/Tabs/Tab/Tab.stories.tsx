import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Tab from '@/components/Tabs/Tab/Tab';

export default {
  title: 'Components/Tabs/Tab',
  component: Tab,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Tab' };

export const Counter = Template.bind({});
Counter.args = { ...Default.args, showCounter: true, counter: 8 };

export const Active = Template.bind({});
Active.args = { ...Default.args, active: true };
