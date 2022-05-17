const variants = {
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
  exit: {
    y: -50,
    x: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export default variants;
