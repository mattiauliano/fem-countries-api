import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = ({ setQuery }) => {
  return (
    <div className="main__search-bar">
      <BiSearchAlt2 size={22} />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
