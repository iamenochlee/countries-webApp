//basics
import React from "react";

//utils
import { HiOutlineX, HiSearch } from "react-icons/hi";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div
      id="search"
      className="flex w-full lg:w-5/12 overflow-hidden bg-skin-accent items-center gap-4 shadow-md cursor-pointer py-4 pl-8 md:w-96 pr-4 mb-9 md:mb-9 xl:mb-7">
      <HiSearch className="text-skin-text" aria-hidden="true" fontSize={20} />
      <input
        aria-label="Search a country"
        className="focus:outline-none w-full focus:placeholder-gray-300 bg-skin-accent placeholder-skin-accent text-skin-input"
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onInput={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm !== "" && (
        <button
          onClick={() => setSearchTerm("")}
          aria-label="clear search input">
          <HiOutlineX fontSize={20} className="text-skin-text" />
        </button>
      )}
    </div>
  );
};

export default React.memo(Search);

Search.displayName = "Search";
