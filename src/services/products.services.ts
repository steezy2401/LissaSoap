import axios from 'axios';

const fetchProducts = async () => {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/products?populate[coverImage][populate]=*`
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

const fetchSuggestedProducts = async () => {
  return [
    {
      id: '1',
      name: 'Bomb',
      description: 'Vanilla, Purple',
      price: 120,
      images: [
        'https://i.ibb.co/qF5sWLh/bomb-big.png',
        'https://i.ibb.co/FbZ2X7F/bomb2.png',
        'https://i.ibb.co/w6R7Hvn/bomb3.png',
        'https://i.ibb.co/qF5sWLh/bomb-big.png',
      ],
    },
    {
      id: '1',
      name: 'Bomb',
      description: 'Vanilla, Purple',
      price: 120,
      images: [
        'https://i.ibb.co/qF5sWLh/bomb-big.png',
        'https://i.ibb.co/FbZ2X7F/bomb2.png',
        'https://i.ibb.co/w6R7Hvn/bomb3.png',
        'https://i.ibb.co/qF5sWLh/bomb-big.png',
      ],
    },
    {
      id: '1',
      name: 'Bomb',
      description: 'Vanilla, Purple',
      price: 120,
      images: [
        'https://i.ibb.co/qF5sWLh/bomb-big.png',
        'https://i.ibb.co/FbZ2X7F/bomb2.png',
        'https://i.ibb.co/w6R7Hvn/bomb3.png',
        'https://i.ibb.co/qF5sWLh/bomb-big.png',
      ],
    },
    {
      id: '1',
      name: 'Bomb',
      description: 'Vanilla, Purple',
      price: 120,
      images: [
        'https://i.ibb.co/qF5sWLh/bomb-big.png',
        'https://i.ibb.co/FbZ2X7F/bomb2.png',
        'https://i.ibb.co/w6R7Hvn/bomb3.png',
        'https://i.ibb.co/qF5sWLh/bomb-big.png',
      ],
    },
  ];
};
export { fetchProducts, fetchSuggestedProducts };
