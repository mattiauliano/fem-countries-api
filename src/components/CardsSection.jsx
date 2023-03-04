import React, { useState } from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";

const CardsSection = ({
  countriesData,
  query,
  region,
  isCardClicked,
  setIsCardClicked,
  setQuery,
}) => {
  const [details, setDetails] = useState({});

  const countriesDataFilters = countriesData
    ?.filter((country) => country.name.toLowerCase().includes(query))
    ?.filter((country) => {
      if (!region) {
        return country;
      } else {
        return country.region.toLowerCase().includes(region);
      }
    });

  const countriesMap = countriesDataFilters?.map((country) => (
    <Card
      key={country.name}
      flag={country.flag}
      name={country.name}
      nativeName={country.nativeName}
      population={country.population}
      region={country.region}
      capital={country.capital}
      subRegion={country.subregion}
      topLevelDomain={country.topLevelDomain}
      currencies={country.currencies}
      languages={country.languages}
      borderCountries={country.borders}
      setDetails={setDetails}
      setIsCardClicked={setIsCardClicked}
    />
  ));

  return (
    <div className="main__cards">
      {!isCardClicked ? (
        countriesMap
      ) : (
        <CardDetails
          flag={details.flag}
          name={details.name}
          nativeName={details.nativeName}
          population={details.population}
          region={details.region}
          capital={details.capital}
          subRegion={details.subRegion}
          topLevelDomain={details.topLevelDomain}
          currencies={details.currencies}
          languages={details.languages}
          borderCountries={details.borderCountries}
          setDetails={setDetails}
          setIsCardClicked={setIsCardClicked}
          setQuery={setQuery}
        />
      )}
    </div>
  );
};

export default CardsSection;
