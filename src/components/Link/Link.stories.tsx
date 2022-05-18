import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Link from '@/components/Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { href: '#', children: 'Link' };
