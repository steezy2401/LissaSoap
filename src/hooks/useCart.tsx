import { useState } from 'react';

import { addToCart } from '@/services/cart.services';

import { Sizes } from '@/types/size.types';
import { Status } from '@/types/status.types';

export default function useCart(
  itemId: string
): [Status, (size: Sizes, quantity: number) => void] {
  const [status, setStatus] = useState<Status>(Status.IDLE);

  const addToCartHandle = async (size: Sizes, quantity: number) => {
    await setStatus(Status.LOADING);
    const result = await addToCart({
      id: itemId,
      size: size,
      quantity: quantity,
    });

    if (result.status == 'success') {
      setStatus(Status.SUCCESS);
    } else {
      setStatus(Status.ERROR);
    }
  };

  return [status, addToCartHandle];
}
