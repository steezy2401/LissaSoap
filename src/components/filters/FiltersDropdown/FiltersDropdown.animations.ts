export const buttonVariants = {
  initial: {
    scale: 1,
  },
  click: {
    scale: 0.95,
  },
};

export const dropdownVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
