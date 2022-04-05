const itemsMobileAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0,
    },
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
  },
};

const itemsAnimation = {
  hidden: {
    x: 150,
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0,
    },
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

export { itemsAnimation, itemsMobileAnimation };
