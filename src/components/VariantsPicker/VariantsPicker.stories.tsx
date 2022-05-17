import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import VariantsPicker from '@/components/VariantsPicker';

export default {
  title: 'Components/VariantsPicker',
  component: VariantsPicker,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof VariantsPicker>;

const Template: ComponentStory<typeof VariantsPicker> = (args) => {
  const variants = [
    { index: 0, id: 1, title: 'Bomb Purple', color: '#9f008f' },
    { index: 1, id: 2, title: 'Bomb Beige', color: '#F8C5C8' },
    { index: 2, id: 3, title: 'Bomb Green', color: '#08f26e' },
  ];

  return (
    <VariantsPicker {...args}>
      {variants.map((item, key) => (
        <VariantsPicker.Item key={key} title={item.title} color={item.color} />
      ))}
    </VariantsPicker>
  );
};

export const Default = Template.bind({});
Default.args = {};
