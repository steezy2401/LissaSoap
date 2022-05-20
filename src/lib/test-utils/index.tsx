import { MantineProvider } from '@mantine/core';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { FC } from 'react';

import { mantineTheme } from '@/stylesheet';

const AllProviders: FC = ({ children }) => (
  <ThemeProvider defaultTheme='dark'>
    <MantineProvider withNormalizeCSS theme={mantineTheme}>
      {children}
    </MantineProvider>
  </ThemeProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
