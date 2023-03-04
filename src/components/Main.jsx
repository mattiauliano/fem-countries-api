import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CardsSection from "./CardsSection";
import Filter from "./Filter";

const Main = ({ countriesData, query, setQuery }) => {
  const [region, setRegion] = useState("");
  const [isCardClicked, setIsCardClicked] = useState(false);

  return (
    <div className="main">
      {!isCardClicked ? (
        <div className="main__search-field">
          <SearchBar setQuery={setQuery} />
          <Filter setRegion={setRegion} />
        </div>
      ) : null}
      <CardsSection
        countriesData={countriesData}
        query={query}
        region={region}
        setIsCardClicked={setIsCardClicked}
        isCardClicked={isCardClicked}
        setQuery={setQuery}
      />
    </div>
  );
};

export default Main;
