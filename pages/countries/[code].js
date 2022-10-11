//basics

import React from "react";
import { useRouter } from "next/router";

//utils

import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { SkeletonCountry } from "../../components/helpers/Skeleton";
import Head from "next/head";
//animation
import { motion } from "framer-motion";
import { useAnimationVariants } from "../../components/helpers/useAnimationVariants";

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
    },
  };
};

const Country = ({ country }) => {
  //variants for animation
  const { countryDataVariants, countryImageVariants, countryVariants } =
    useAnimationVariants();

  //code
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

  //router
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Countries | ${country.name.common}`}</title>
        <meta
          name="description"
          content={`Learn About ${country.name.common}, her population, ${
            country.borders ? "borders ," : ""
          } capital, currencies...`}
        />
      </Head>
      <div className="lg:pb-64">
        <motion.button
          onClick={() => router.back()}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          className="inline-flex cursor-pointer outline-none
          focus-visible:outline-skin-clr focus-visible:bg-skin-accent justify-between
          text-skin-text lg:mt-6 bg-skin-accent items-center gap-2
          hover:drop-shadow-md border-none md:mb-20 mb-12 shadow px-7 py-1 ">
          <BiArrowBack className="text-skin-text" aria-hidden="true" />
          Back
        </motion.button>
        {loading ? (
          <SkeletonCountry />
        ) : (
          <div className="w-full flex flex-col md:flex-row justify-between lg:justify-between lg:gap-28  md:w-full lg:items-center md:gap-20 md:items-center mx-auto md:pr-12 lg:pr-0 md:mb-0 mb-12 relative">
            <motion.a
              href={country.maps.googleMaps}
              target="_blank"
              variants={countryImageVariants}
              animate="visible"
              initial="hidden"
              key={router.asPath}
              className="my-3 md:my-0 focus-visible:outline-none cursor-default block mb-8 sm:mb-0">
              <Image
                objectFit="fill"
                width={570}
                height={405}
                priority
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                className="w-full"
              />
            </motion.a>

            <motion.div
              variants={countryVariants}
              initial="hidden"
              animate="visible"
              key={router.query.code}
              className="flex text-skin-text flex-col sm:w-5/12 gap-3 ">
              <h2 className="text-xl font-extrabold lg:text-3xl lg:mb-5">
                {country.name.common}
              </h2>
              <div className="flex flex-col gap-8 ">
                <motion.div
                  variants={countryDataVariants}
                  initial="hidden"
                  animate="visible"
                  key={router.pathname}
                  className="flex flex-col lg:flex-row 
            lg:gap-16 lg:mb-9 lg:justify-between">
                  <ul className="flex flex-col gap-2">
                    {country.nativeName && (
                      <li className="text-sm  text-gray-800 dark:text-gray-200">
                        <small className=" text-skin-text text-sm font-semibold ">
                          Native Names:{" "}
                        </small>
                        {country.name.nativeName[code].common}
                      </li>
                    )}
                    <li className="text-sm  text-gray-800 dark:text-gray-200">
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
                </motion.div>
                <div className="text-sm font-semibold lg:flex lg:justify-between lg:items-center md:absolute lg:static md:left-0 md:-bottom-32">
                  <p className="lg:w-48">Border Countries:</p>
                  {country.borders ? (
                    <div className="flex mt-2 flex-wrap w-full gap-2.5  xl:gap-3  lg:justify-start mx-auto mb-4 lg:mb-0 lg:mt-0 ">
                      {country.borders.map((bor, i) => {
                        return (
                          <Link key={bor + i} href={bor}>
                            <a
                              id="border"
                              className=" w-16 h-6 flex items-center justify-center shadow mt-2 lg:mt-0  border outline-none focus:outline-skin-clr focus:bg-skin-accent bg-skin-accent hover:drop-shadow-md dark:hover:bg-skin-bg border-none ">
                              {bor}
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm font-normal mt-1">
                      No borders Country
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(Country);

Country.displayNsme = "Country";
