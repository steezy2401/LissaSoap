const pickerVariants = {
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

export default pickerVariants;
