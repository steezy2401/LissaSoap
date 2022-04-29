export async function getProductData(id: string) {
  //TODO: Get product data by ID

  //!Mock result return
  return {
    id,
    images: [
      'https://i.ibb.co/qF5sWLh/bomb-big.png',
      'https://i.ibb.co/FbZ2X7F/bomb2.png',
      'https://i.ibb.co/w6R7Hvn/bomb3.png',
      'https://i.ibb.co/qF5sWLh/bomb-big.png',
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
