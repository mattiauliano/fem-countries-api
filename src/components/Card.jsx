import React, { useState } from "react";

const Card = ({
  flag,
  name,
  nativeName,
  population,
  region,
  capital,
  subRegion,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
  setDetails,
  setIsCardClicked,
}) => {
  const formattedPopulation = new Intl.NumberFormat().format(population);

  function handleCardClick() {
    setIsCardClicked(true);
    setDetails({
      flag: flag,
      name: name,
      nativeName: nativeName,
      population: formattedPopulation,
      region: region,
      subRegion: subRegion,
      capital: capital,
      topLevelDomain: topLevelDomain,
      currencies: currencies,
      languages: languages,
      borderCountries: borderCountries,
    });
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={flag} alt={`flag: ${name}`} className="card__flag" />
      <div className="card__infos">
        <h1 className="card__name">{name}</h1>
        <ul className="card__specifications">
          <li className="info">
            <span className="bold">Population: </span>
            <span>{formattedPopulation}</span>
          </li>
          <li className="info">
            <span className="bold">Region: </span>
            <span>{region}</span>
          </li>
          <li className="info">
            <span className="bold">Capital: </span>
            <span>{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
