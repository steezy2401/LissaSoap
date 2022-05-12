import axios from 'axios';

//Get signle product
export async function getProductData(slug: string) {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/products?filters[slug]=${slug}&populate[variants][populate]=*&populate[information][populate]=*&populate[suggestedProducts][populate]=coverImage`
    );

    const productData = res.data;
    return { status: 200, data: productData.data[0] };
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
