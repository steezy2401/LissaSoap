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

const Template: ComponentStory<typeof Tabs> = () => (
  <Tabs>
    <Tabs.Tab title='New'>Content 1</Tabs.Tab>
    <Tabs.Tab title='Popular'>Content 2</Tabs.Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
