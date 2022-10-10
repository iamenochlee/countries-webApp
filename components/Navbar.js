//basics
import Link from "next/link";
import React from "react";

//utils
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import useLocalStorage from "./hooks/useDarkModeLocalStorage";

const Navbar = () => {
  const { darkmode, setDarkmode } = useLocalStorage();

  return (
    <nav className="flex text-skin-text justify-between items-center h-16 lg:h-20 ">
      <Link href="/">
        <a className="md:text-2xl font-bold p-1 focus-visible:outline-none focus:bg-gray-200  dark:focus:bg-gray-500 rounded-lg   ">
          <h1>Where in the world?</h1>
        </a>
      </Link>
      <button
        id="themeBtn"
        className="flex focus:transition-all duration-500  align-middle mb-1 skin-bg items-center gap-1.5 focus:border hover:border-b-2 hover:border-skin-clr  focus:text-skin-text hover:pt-2 focus:outline-skin-clr focus:border-spacing-16 px-3 py-1 rounded-3xl focus:bg-gray-300 dark:bg-skin-bg"
        onClick={() => {
          setDarkmode(!darkmode);
        }}>
        {!darkmode ? (
          <HiOutlineMoon aria-label="darkmode" fontSize={15} />
        ) : (
          <HiOutlineSun aria-label="light theme" fontSize={15} />
        )}
        <p
          id="theme-text"
          className="text-sm hidden sm:block font-extrabold tracking-wide mt-1">
          {!darkmode ? "Dark Mode" : "LightTheme"}
        </p>
      </button>
    </nav>
  );
};

export default Navbar;

Navbar.displayName = "Navbar";
