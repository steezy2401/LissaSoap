export async function getProductData(id: string) {
  //TODO: Get product data by ID

  //!Mock result return
  return {
    id,
    name: 'Soap bomb',
    description: 'Purple, Vanilla',
    price: 120,
    hasDiscount: true,
    lastPrice: 150,
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
