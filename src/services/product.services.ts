import axios from 'axios';

//Get signle product
export async function getProductData(id: string) {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/products/${id}/?populate[variants][populate]=*&populate[information][populate]=*`
    );

    const productData = res.data;
    return { status: 200, data: makeProduct(productData.data) };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        data: null,
        error: error.response?.statusText || 'Unexpected error',
      };
    } else {
      return {
        status: 500,
        data: null,
        error: 'Unexpected error',
      };
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeProduct(product: any) {
  const productData = { id: product.id, ...product.attributes };

  return productData;
}
