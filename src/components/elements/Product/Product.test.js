import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Product from './Product';

describe('App component', () => {
  test('it renders', async () => {
    render(<Product name='Bomb' description='Vanilla, Purple' price={120} />);

    expect(screen.getByText(/bomb/i)).toBeInTheDocument();
    expect(screen.getByText(/vanilla, purple/i)).toBeInTheDocument();
    expect(screen.getByText(/120/i)).toBeInTheDocument();
  });
});
