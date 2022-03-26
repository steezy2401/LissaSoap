import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import PageTitle from '@/components/PageTitle/PageTitle';

export default {
  title: 'Components/PageTitle/PageTitle',
  component: PageTitle,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = { title: 'Soap' };
