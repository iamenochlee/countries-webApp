//basics
import React from "react";

//components
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header className="px-6 bg-skin-accent sticky md:px-12 lg:px-12 xl:px-16 2xl:px-28 shadow-md shadow-skin-shadow mb-9 lg:mb-12">
        <Navbar />
      </header>
      <main className="mx-6 lg:mx-12 xl:mx-16 2xl:mx-28 md:mx-12 ">
        {children}
      </main>
    </>
  );
};

export default Layout;
