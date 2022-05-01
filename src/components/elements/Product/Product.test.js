import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Product from './Product';

describe('App component', () => {
  test('it renders', async () => {
    render(
      <Product
        name='Bomb'
        description='Vanilla, Purple'
        price={120}
        images={[
          'https://i.ibb.co/qF5sWLh/bomb-big.png',
          'https://i.ibb.co/FbZ2X7F/bomb2.png',
          'https://i.ibb.co/w6R7Hvn/bomb3.png',
          'https://i.ibb.co/qF5sWLh/bomb-big.png',
        ]}
      />
    );

    expect(screen.getByText(/bomb/i)).toBeInTheDocument();
    expect(screen.getByText(/vanilla, purple/i)).toBeInTheDocument();
    expect(screen.getByText(/120/i)).toBeInTheDocument();
  });
});
