//basics
import React from "react";

//components
import Card from "./Card";

//utils
import { SkeletonCard } from "./SkeletonCard";
import { FaArrowUp } from "react-icons/fa";

//hooks
import { useScrollToTop } from "./hooks/useScrollToTop";

const Countries = ({ countries }) => {
  const [loading, setLoading] = React.useState(true);

  //scroll to top
  const { show, scrollToTop } = useScrollToTop();

  React.useEffect(() => {
    setTimeout(() => {
      if (countries) {
        setLoading(false);
      }
    }, 1000);
  }, [countries]);

  return (
    <>
      <section
        aria-label="countries"
        className="sm:grid sm:grid-cols-2 sm:gap-9 lg:grid-cols-3 lg:gap-20 xl:grid-cols-4 xl:gap-16 md:grid-cols-2 md:gap-12">
        <FaArrowUp
          onClick={scrollToTop}
          aria-hidden="true"
          className={`bg-gray-300 ${
            !show ? "invisible" : "visible"
          } rounded-full fixed right-3 bottom-6 p-2 z-50 drop-shadow-xl cursor-pointer hover:scale-110 hover:text-5xl`}
          fontSize={40}
        />
        {loading
          ? [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n, i) => (
              <SkeletonCard key={n + i} />
            ))
          : Object.values(countries).map((country, i) => (
              <Card key={country + i} country={country} />
            ))}
      </section>
    </>
  );
};

export default Countries;
