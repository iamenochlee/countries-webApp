//basics
import React from "react";

//utils
import Head from "next/head";
//components
import Search from "../components/Search";
import Filter from "../components/Filter";
import Countries from "../components/Countries";

export default function Home({ data }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [region, setRegion] = React.useState("");

  let countriesData = data;
  const [country, _setCountries] = React.useState(countriesData);

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
        <title>Countries App</title>
        <meta
          name="description"
          content="Your One stop to discover details about all Countries"
        />
      </Head>
      <div className="md:flex justify-between align-middle lg:mb-5">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter setRegion={setRegion} />
      </div>
      <main>
        <Countries countries={filterCountries} />
      </main>
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
