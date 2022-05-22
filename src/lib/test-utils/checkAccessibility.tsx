import { act, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import { render } from '@/lib/test-utils';

const config = {
  rules: {
    region: {
      enabled: false,
    },

    'autocomplete-valid': {
      enabled: false,
    },
  },
};

async function renderWithAct(element: React.ReactElement) {
  let result: RenderResult = {} as RenderResult;

  await act(async () => {
    result = render(element);
  });

  return result;
}

export function checkAccessibility(elements: React.ReactElement[]) {
  expect.extend(toHaveNoViolations);

  it('has no accessibility violations', async () => {
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    for (const element of elements) {
      const { container } = await renderWithAct(element);
      const result = await axe(container, config);
      await expect(result).toHaveNoViolations();
    }
  }, 30000);
}
