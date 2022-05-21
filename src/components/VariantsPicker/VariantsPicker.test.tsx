import { screen, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@/lib/__mocks__/matchMedia.mock';

import { render } from '@/lib/test-utils';

import VariantsPicker from './VariantsPicker';

describe('VariantsPicker', () => {
  it('Is rendering', async () => {
    render(
      <VariantsPicker>
        <VariantsPicker.Item active={true} title='Green' color='#5eeb34' />
        <VariantsPicker.Item active={false} title='Blue' color='#343deb' />
        <VariantsPicker.Item active={false} title='Red' color='#ab091e' />
      </VariantsPicker>
    );

    expect(screen.getAllByTestId('variants-picker-item')).toHaveLength(3);

    const firstItem = screen.getAllByTestId('variants-picker-item')[0];

    await waitFor(() =>
      expect(within(firstItem).getByTestId('background')).toHaveStyle(
        'transform: scale(1.5) translateZ(0)'
      )
    );
  });
});
