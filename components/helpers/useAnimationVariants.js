import { useMediaQuery } from "react-responsive";

export const useAnimationVariants = () => {
  const isBigScreen = useMediaQuery({ minWidth: 900 });

  const countryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const countryDataVariants = {
    hidden: { x: "50px" },
    visible: {
      x: "0",
      transition: {
        duration: 0.6,
      },
    },
  };

  const countryImageVariants = {
    hidden: { y: isBigScreen ? "50px" : "0", x: isBigScreen ? "0px" : "-30px" },
    visible: {
      y: "0",
      x: "0",
      transition: {
        duration: 0.6,
      },
    },
  };

  const scrollVariants = {
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

  return {
    countryDataVariants,
    scrollVariants,
    countryImageVariants,
    countryVariants,
  };
};
