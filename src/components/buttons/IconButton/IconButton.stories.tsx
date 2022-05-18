import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import IconButton from './IconButton';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div className='p-4'>
    <div className='absolute top-2 left-2'>
      <IconButton {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = { size: 30, colorSec: '#FF005C' };
