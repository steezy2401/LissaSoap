const fetchSlider = async () => {
  return {
    tabs: [
      { title: 'New', showCounter: true, counter: 8, active: true },
      { title: 'Popular', showCounter: true, counter: 17 },
    ],
    sections: [
      {
        title: 'New',
        items: [
          { name: 'Bomb', description: 'Purple, Vanilla', price: 110 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        ],
      },
      {
        title: 'Popular',
        items: [
          { name: 'Bomb', description: 'Purple, Vanilla', price: 110 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
          { name: 'Bomb', description: 'Purple, Vanilla', price: 120 },
        ],
      },
    ],
  };
};

export { fetchSlider };
