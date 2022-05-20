import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@/lib/__mocks__/matchMedia.mock';

import { render } from '@/lib/test-utils';

import Product from './Product';

const testProps = {
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
    render(<Product {...testProps} />);
    expect(screen.getByText(testProps.name)).toBeDefined();
    expect(screen.getByText(testProps.description)).toBeDefined();
    expect(screen.getByText(testProps.price)).toBeDefined();
    expect(screen.getByText(testProps.discountPrice)).toBeDefined();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/product/${testProps.slug}`
    );
  });

  it('Test Add-to-Cart button', () => {
    render(<Product {...testProps} />);
    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });

    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).not.toBeVisible();
  });

  it('Test Add-to-Cart button hover', async () => {
    const user = userEvent.setup();
    render(<Product {...testProps} />);
    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });

    await user.hover(screen.getByTestId('product-root'));

    await waitFor(() => expect(addToCartButton).toBeVisible());
  });
});
