import React from "react";

export const useScrollToTop = () => {
  const [show, setShow] = React.useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return { show, scrollToTop };
};
