enum FilterDropdownAnimationsTypes {
  'pullDown',
}

const filterDropdownAnimations = {
  pullDown: {
    y: [0, 3, 0],
    transition: {
      duration: 0.4,
      type: 'spring',
      damping: 2,
      stiffness: 150,
      repeat: 1,
    },
  },
  show: {
    y: 0,
    transition: { duration: 1.2 },
  },
};

export { filterDropdownAnimations, FilterDropdownAnimationsTypes };
