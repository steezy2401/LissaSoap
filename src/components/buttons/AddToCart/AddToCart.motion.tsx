const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
  click: {
    scale: 0.95,
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  show: {
    opacity: 1,
    transition: {
      staggerDirection: -1,
    },
    y: 0,
  },
};

export { buttonVariants, containerVariants };
