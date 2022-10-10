import React from "react";

const useLocalStorage = () => {
  const [darkmode, setDarkmode] = React.useState(null);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkmode(true);
    }
  }, []);
  React.useEffect(() => {
    if (darkmode !== null) {
      localStorage.setItem("theme", JSON.stringify(darkmode));
    }
    if (JSON.parse(localStorage.getItem("theme")) === null) {
      setDarkmode(false);
    } else {
      setDarkmode(JSON.parse(localStorage.getItem("theme")));
    }

    if (darkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkmode]);

  return { darkmode, setDarkmode };
};

export default useLocalStorage;
