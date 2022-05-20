import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@/lib/__mocks__/matchMedia.mock';

import { render } from '@/lib/test-utils';

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

describe('Product', () => {
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
    expect(screen.getByText('Bomb-1')).toBeInTheDocument();
    expect(screen.getByText('Bomb-2')).toBeInTheDocument();
    expect(screen.getByText('Bomb-3')).toBeInTheDocument();
    expect(screen.getByText('Bomb-4')).toBeInTheDocument();
    expect(screen.queryByText('Bomb')).not.toBeInTheDocument();
  });
});
