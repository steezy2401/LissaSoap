const buttonVariants = {
  initial: {
    scale: 1,
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerDirection: -1,
    },
    y: 0,
  },
  hover: {
    scale: 1.05,
  },
  click: {
    scale: 0.95,
  },
};

export { buttonVariants };
