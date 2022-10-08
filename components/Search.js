//basics
import React from "react";

//utils
import { HiSearch } from "react-icons/hi";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex w-full bg-skin-accent items-center gap-4 shadow-md cursor-pointer py-4 pl-6 md:w-96 pr-2 mb-9 md:mb-9">
      <HiSearch className="text-skin-text" fontSize={20} />
      <input
        className="focus:outline-none w-full focus:placeholder-gray-300 bg-skin-accent placeholder-skin-accent text-skin-input"
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onInput={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default React.memo(Search);

Search.displayName = "Search";
