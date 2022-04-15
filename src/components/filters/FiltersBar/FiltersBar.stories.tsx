import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import FiltersBar from '@/components/filters/FiltersBar/FiltersBar';

const flavors = [
  { id: '1', title: 'Apple', description: 'Smooth apple smell', icon: '111' },
  {
    id: '2',
    title: 'Orange',
    description: 'Smooth orange smell',
    icon: '111',
  },
  { id: '3', title: 'Rose', description: 'Smooth rose smell', icon: '111' },
  { id: '4', title: 'Mint', description: 'Smooth mint smell', icon: '111' },
  {
    id: '5',
    title: 'Porfume',
    description: 'Smooth porfume smell',
    icon: '111',
  },
];

const colors = [
  { id: '1', color: '#4E0A82', description: 'Tokyo' },
  { id: '2', color: '#3D009F', description: 'Strong Indigo' },
  { id: '3', color: '#4759E6', description: 'Basic Blue' },
  { id: '4', color: '#96DFE4', description: 'Island Paradise' },
  { id: '5', color: '#A6D8F0', description: 'Waterspout ' },
  { id: '6', color: '#EE82EE', description: 'Digital Violet' },
  { id: '7', color: '#FF8B58', description: 'Mango Orange' },
  { id: '8', color: '#FEB545', description: 'Tangy' },
  { id: '9', color: '#F5AC3B', description: 'Classic Saffron' },
  { id: '10', color: '#CE3226', description: 'Red Beauty' },
  { id: '11', color: '#EE2516', description: 'Strong Vermillion' },
];

const collections = [
  { id: '1', title: 'Soap Bombs', description: 'Soap in shape of toy bombs' },
  { id: '2', title: 'Bubble gaming', description: 'Games related soap' },
];

export default {
  title: 'Components/Filters/FiltersBar/FiltersBar',
  component: FiltersBar,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof FiltersBar>;

const Template: ComponentStory<typeof FiltersBar> = () => (
  <FiltersBar flavors={flavors} colors={colors} collections={collections} />
);

export const Default = Template.bind({});
Default.args = {};
