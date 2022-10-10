export const dataVariants = {
  hidden: { x: "50px" },
  visible: {
    x: "0",
    transition: {
      duration: 0.7,
    },
  },
};

export const imgVariants = {
  hidden: { y: "50px" },
  visible: {
    y: "0",
    transition: {
      duration: 0.6,
    },
  },
};

export const cardVariants = {
  hidden: { y: "35px", scale: 1 },
  visible: {
    y: "0",
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const scrollVariants = {
  hidden: { y: "-8px" },
  visible: {
    y: "6px",
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};
