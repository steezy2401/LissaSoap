import { ICartProduct } from '@/types/product.types';

interface IResponse {
  status: 'success' | 'error';
  error: string | undefined;
}

// eslint-disable-next-line unused-imports/no-unused-vars
export async function addToCart(item: ICartProduct): Promise<IResponse> {
  //TODO: Add to cart

  sleep(2000);

  return { status: 'success', error: undefined };
}

function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
