export async function getProductData(id: string) {
  //TODO: Get product data by ID

  //!Mock result return
  return {
    id,
    images: [
      'https://i.ibb.co/Rz4K0r5/soap1.png',
      'https://i.ibb.co/VvkvL9n/soap2.png',
      'https://i.ibb.co/JvNJt7q/soap3.png',
      'https://i.ibb.co/Rz4K0r5/soap1.png',
    ],
    name: 'Bomb',
    description: 'Strawberry vanilla',
    price: 120,
    hasDiscount: true,
    lastPrice: 150,
    inStock: true,
  };
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
