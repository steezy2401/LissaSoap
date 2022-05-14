import axios from 'axios';

const fetchSlider = async () => {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/main-slider?populate[0]=slider&populate[1]=slider.products.coverImage`
    );

    const productData = res.data;
    return { status: 200, data: productData.data };
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
};

export { fetchSlider };
