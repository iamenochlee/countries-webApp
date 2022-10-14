//basics
import React from "react";

//utils
import Image from "next/image";
import Link from "next/link";

//animation
import { motion } from "framer-motion";

const Card = ({ country }) => {
  React.useEffect(() => {}, []);

  return (
    <Link href={`/countries/${country.cca3}`}>
      <motion.a
        href=""
        className="dark:focus-visible:outline-gray-500 w-72 sm:w-full block
        mx-auto h-auto focus:outline-gray-400 focus:scale-105 rounded"
        viewport={{ once: true }}
        initial={{ opacity: 0.97, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: 0.5 }}
        whileHover={{ scale: 1.05 }}>
        <a className="w-72  hover:drop-shadow-lg cursor-pointer bg-skin-accent text-skin-text md:w-full mx-auto md:pb-6 focus:scale-105 dark:focus-visible:outline-gray-500 focus:outline-none focus:shadow-lg border-red-600 focus-visible:outline-gray-300 focus:outline-offset-0 lg:pb-6 rounded-md pb-8 shadow-md overflow-hidden mb-9 md:mb-0 block">
          <div>
            <Image
              objectFit="cover"
              width={500}
              height={300}
              priority
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
            />
            <div
              className="py-4 px-6  mb-3 flex justify-between items-start 
          ">
              <div className="">
                <h2 className="text-xl font-extrabold mb-2 w-11/12 lg:w-10/12 text-ellipsis overflow-hidden whitespace-nowrap">
                  {country.name.common.slice(0, 20)}
                </h2>
                <p className="text-base font-thin text-gray-900 dark:text-gray-300">
                  <small className="font-semibold text-skin-text  text-base">
                    Population:{" "}
                  </small>
                  {country.population.toLocaleString("en-US")}
                </p>
                <p className="text-base font-thin text-gray-900 dark:text-gray-300">
                  <small className="font-semibold text-skin-text text-base">
                    Region:{" "}
                  </small>
                  {country.region}
                </p>

                <p className="text-base font-thin text-gray-900 dark:text-gray-300">
                  <small className="font-semibold text-skin-text  text-base">
                    Capital:{" "}
                  </small>
                  {country.capital}
                </p>
              </div>
            </div>
          </div>
        </a>
      </motion.a>
    </Link>
  );
};

export default Card;

Card.displayName = "Card";
