import React from "react";

export const useScrollToTop = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 900) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return { show, scrollToTop };
};
