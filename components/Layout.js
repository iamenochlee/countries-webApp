//basics
import React from "react";

//components
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  //revealing header on scroll up
  React.useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }

      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });
  }, []);
  return (
    <>
      <header className="px-6 bg-skin-accent sticky top-0 left-0 z-10 md:px-12 lg:px-12 xl:px-20 2xl:px-28 shadow-md shadow-skin-shadow mb-9 lg:mb-12">
        <Navbar />
      </header>
      <main className="mx-6  lg:mx-18 xl:mx-20 2xl:mx-28 md:mx-12 ">
        {children}
      </main>
    </>
  );
};

export default Layout;
