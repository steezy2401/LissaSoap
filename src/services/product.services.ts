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
    return { status: 404, data: null, error: 'Not found' };
  }
}

export async function getAllProductIds() {
  //TODO: Get all ids in products

  //!Mock array return
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push({ params: { id: i + '' } });
  }

  return arr;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeProduct(product: any) {
  const productData = { id: product.id, ...product.attributes };

  return productData;
}
