//basics
import React from "react";

//utils
import Head from "next/head";
import { MotionConfig } from "framer-motion";
//components
import Search from "../components/Search";
import Filter from "../components/Filter";
import Countries from "../components/Countries";

export default function Home({ data }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [region, setRegion] = React.useState("");
  let country = data;

  const filterCountries = country.filter((country) =>
    searchTerm
      ? country.name.common
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );

  return (
    <>
      <Head>
        <title>Countries</title>
        <meta
          name="description"
          content="Your one stop to discover details about all Countries"
        />
      </Head>
      <MotionConfig reducedMotion="user">
        <div className="md:flex justify-between align-middle lg:mb-5">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter setRegion={setRegion} />
        </div>
        <main>
          <Countries countries={filterCountries} />
          {filterCountries.length < 1 && (
            <h2 className="text-skin-text text-base md:text-lg">
              Oops! Not found
            </h2>
          )}
        </main>
      </MotionConfig>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
