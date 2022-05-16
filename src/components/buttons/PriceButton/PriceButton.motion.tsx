const buttonVariants = {
  initial: {
    scale: 1,
    borderRadius: '0rem 1rem 1rem 0rem',
  },
  hover: {
    scale: 1.2,
    borderRadius: '1rem 1rem 1rem 1rem',
  },
  click: {
    scale: 1,
    borderRadius: '0rem 1rem 1rem 0rem',
  },
  loading: {
    borderRadius: '1rem 1rem 1rem 1rem',
  },
};

const loaderVariants = {
  initial: {
    y: 20,
    x: '-50%',
    opacity: 0,
  },
  show: {
    x: '-50%',
    y: '-50%',
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      y: {
        delay: 0.1,
      },
    },
  },
};

export { buttonVariants, loaderVariants };
