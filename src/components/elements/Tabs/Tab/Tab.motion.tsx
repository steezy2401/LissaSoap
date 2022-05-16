const variants = {
  hidden: { opacity: 0, scaleX: 0, transition: { duration: 0.2 } },
  show: {
    opacity: 1,
    transition: {
      staggerDirection: -1,
    },
    scaleX: 1,
  },
};

export default variants;
