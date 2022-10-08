//basics

import React from "react";

//utils

import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import SkeletonCountry from "../../components/SkeletonCountry";
import Head from "next/head";
import { motion } from "framer-motion";

export const getStaticPaths = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all/`);
  const data = await res.json();

  const paths = data.map((country) => {
    const code = country.cca3;

    return {
      params: { code },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const code = context.params.code;

  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data = await res.json();

  return {
    props: {
      country: Object.assign(...data),
      // countries,
    },
  };
};

const Country = ({ country }) => {
  let code;
  if (country.languages) {
    const language = Object.keys(country?.languages);
    code = language[language?.length - 1];
  }
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      if (country) {
        setloading(false);
      }
    }, 1000);
  }, [country]);

  return (
    <>
      <Head>
        <title>{`Countries App | ${country.name.common}`}</title>
        <meta
          name="description"
          content={`Learn About ${country.name.common}, her population, ${
            country.borders ? "borders ," : ""
          } capital, currencies...`}
        />
      </Head>
      <main className="lg:pb-64">
        <Link href="/">
          <motion.a
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="inline-flex cursor-pointer outline-none focus:outline-skin-clr focus:bg-skin-accent justify-between text-skin-text lg:mt-6 bg-skin-accent items-center gap-2 hover:drop-shadow-md border-none md:mb-20 mb-12 shadow px-7  py-1 ">
            <BiArrowBack className="text-skin-text" aria-hidden="true" />
            Back
          </motion.a>
        </Link>
        {loading ? (
          <SkeletonCountry />
        ) : (
          <div className="w-full flex flex-col md:flex-row gap-4 justify-between lg:justify-between lg:gap-36 m  md:w-full lg:items-center md:gap-20 md:items-center mx-auto md:pr-12 lg:pr-0 md:mb-0 mb-12 relative">
            <div className="my-3 md:my-0 relative cursor-pointer ">
              <Image
                objectFit="cover"
                width={515}
                height={412}
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
              />
              <div className="absolute w-full h-full opacity-0 hover:opacity-90 flex items-end justify-end bg-gradient-to-r from-gray-50 to-gray-300 top-0  dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900">
                <Link href={country.maps.googleMaps}>
                  <a className="xl:text-2xl  flex   text-black dark:text-gray-400 font-extrabold border-4 border-black dark:border-gray-500 border-ehite px-2 py-2 absolute ">
                    <div>
                      <Image
                        src="/location.svg"
                        alt="location icon"
                        hidden={true}
                        width={30}
                        height={15}
                      />
                    </div>{" "}
                    {country.name.common.toUpperCase()}
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex text-skin-text flex-col gap-3 ">
              <h2 className="text-xl font-extrabold lg:text-3xl lg:mb-5">
                {country.name.common}
              </h2>
              <div className="flex flex-col gap-8 ">
                <div
                  className="flex flex-col gap-8 lg:flex-row 
            lg:gap-16 xl:gap-48 lg:mb-9 lg:justify-between">
                  <ul className="flex flex-col gap-2">
                    {country.nativeName && (
                      <li className="text-sm  text-gray-800 dark:text-gray-200">
                        <small className=" text-skin-text text-sm font-semibold ">
                          Native Names:{" "}
                        </small>
                        {country.name.nativeName[code].common}
                      </li>
                    )}
                    <li
                      className="text-sm  text-gray-800 dark:text-gray-200
]">
                      <small className=" text-skin-text text-sm font-semibold ">
                        Population:{" "}
                      </small>
                      {country.population.toLocaleString("en-US")}
                    </li>
                    <li className="text-sm  text-gray-800 dark:text-gray-200">
                      <small className="text-skin-text  text-sm font-semibold ">
                        Region:{" "}
                      </small>
                      {country.region}
                    </li>
                    <li className="text-sm  text-gray-800 dark:text-gray-200">
                      <small className="text-skin-text  text-sm font-semibold ">
                        Sub Region:{" "}
                      </small>
                      {country.subregion}
                    </li>
                    <li className="text-sm  text-gray-800 dark:text-gray-200">
                      <small className="text-skin-text text-sm font-semibold ">
                        Capital:{" "}
                      </small>
                      {country.capital}
                    </li>
                  </ul>

                  <ul className="flex flex-col gap-2">
                    <li className="text-sm  text-gray-800 dark:text-gray-200">
                      <small className="text-skin-text  text-gray-800 dark:text-gray-200 font-semibold text-sm">
                        Top Level Domain:
                      </small>
                      {` ${country.tld}`}
                    </li>
                    {country.currencies && (
                      <li className="text-sm  font-semibold">
                        Currencies:
                        {Object.values(country.currencies).map((curr, i) => (
                          <small
                            className="text-sm  text-gray-800 dark:text-gray-200  font-normal"
                            key={curr + i}>
                            {` ${curr.name}`}
                          </small>
                        ))}
                      </li>
                    )}

                    {country.languages && (
                      <li className="text-sm  text-gray-800 dark:text-gray-200  font-semibold flex gap-1">
                        Languages:
                        <div className="flex gap-1">
                          {Object.values(country.languages)
                            .sort()
                            .map((lang, i) => (
                              <span className="font-normal" key={lang + i}>
                                {lang}
                              </span>
                            ))}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="text-sm font-semibold lg:flex lg:justify-between lg:items-center md:absolute lg:static md:left-0 md:-bottom-24">
                  <p className="lg:w-48">Border Countries:</p>
                  {country.borders ? (
                    <div className="flex mt-2 flex-wrap w-full gap-2.5 lg:gap-1 2xl:gap-3 justify-between lg:justify-start mx-auto mb-4 lg:mb-0 lg:mt-0 ">
                      {country.borders.map((bor, i) => {
                        return (
                          <Link key={bor + i} href={bor}>
                            <a className=" px-7 py-0.5 shadow mt-2 lg:mt-0  border outline-none focus:outline-skin-clr focus:bg-skin-accent bg-skin-accent items-center hover:drop-shadow-md dark:hover:bg-skin-bg border-none ">
                              {bor}
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm">No borders Country</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Country;

Country.displayNsme = "Country";
