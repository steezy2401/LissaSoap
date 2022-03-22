import '../src/styles/globals.css';
import '../src/styles/animations.css';
import * as NextImage from 'next/image';
import { MantineProvider } from '@mantine/core';
import { mantineTheme } from '../src/stylesheet';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <MantineProvider theme={mantineTheme}><Story /></MantineProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
};
