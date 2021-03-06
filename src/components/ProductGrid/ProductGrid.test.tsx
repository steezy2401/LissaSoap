/* eslint-disable no-console */
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@/lib/__mocks__/matchMedia.mock';

import { render } from '@/lib/test-utils';
import { checkAccessibility } from '@/lib/test-utils/checkAccessibility';

import ProductGrid from './ProductGrid';

const testProps = {
  id: '1',
  name: 'Bomb',
  slug: 'bomb',
  description: 'Soap in shape of bombs',
  price: 120,
  image: 'https://i.ibb.co/qF5sWLh/bomb-big.png',
  hasDiscount: true,
  discountPrice: 100,
};

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

describe('ProductGrid', () => {
  checkAccessibility([
    <ProductGrid key={1}>
      {[1, 2, 3, 4].map((number, key) => (
        <ProductGrid.Item
          key={number}
          {...testProps}
          name={`Bomb-${number}`}
          index={key}
        />
      ))}
    </ProductGrid>,
  ]);
  it('Is rendering', () => {
    render(
      <ProductGrid>
        {[1, 2, 3, 4].map((number, key) => (
          <ProductGrid.Item
            key={number}
            {...testProps}
            name={`Bomb-${number}`}
            index={key}
          />
        ))}
      </ProductGrid>
    );
    expect(screen.getAllByTestId('product-root')).toHaveLength(4);
  });
});
