//basics
import React from "react";

const Filter = ({ setRegion }) => {
  return (
    <>
      <select
        className="block dark:focus-visible:outline-gray-400 bg-skin-accent text-skin-text outline-none  cursor-pointer py-3 pl-1 mb-9 w-48 text-sm md:py-0 shadow  rounded-sm border-none focus:outline-1 focus:outline-gray-500"
        id="regions"
        onChange={(e) => setRegion(e.target.value)}>
        <option value="/" defaultValue hidden>
          Filter by Region
        </option>
        <option value="">&nbsp; All</option>
        {["Africa", "America", "Asia", "Europe", "Oceania"].map((option, i) => (
          <option key={option + i} value={option}>
            &nbsp; {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default React.memo(Filter);

Filter.displayName = "Filter";
