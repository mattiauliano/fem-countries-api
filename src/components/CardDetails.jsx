import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const CardDetails = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
  setDetails,
  setIsCardClicked,
  setQuery,
}) => {
  function handleBack() {
    setIsCardClicked(false);
    setDetails({});
    setQuery("");
  }

  return (
    <div className="card__detailsCard">
      <button className="back" onClick={handleBack}>
        <IoIosArrowRoundBack />
        <p>Back</p>
      </button>
      <div>
        <img src={flag} alt={name} />
        <div>
          <h1 className="detailsCard__name">{name}</h1>
          <div className="detailsCard__basicInfos">
            <p>
              <span>Native Name: </span>
              <span>{nativeName}</span>
            </p>
            <p>
              <span>Population: </span>
              <span>{population}</span>
            </p>
            <p>
              <span>Region: </span>
              <span>{region}</span>
            </p>
            <p>
              <span>Sub Region: </span>
              <span>{subRegion}</span>
            </p>
            <p>
              <span>Capital: </span>
              <span>{capital}</span>
            </p>
            <p>
              <span>Top Level Domain: </span>
              <span>{topLevelDomain[0]}</span>
            </p>
          </div>
          <div className="detailsCard__moreInfos">
            <p>
              <span>Currencies: </span>
              <ul>
                {currencies?.map((currency) => {
                  return <li key={currency.code}>{currency.name}</li>;
                })}
              </ul>
            </p>
            <p>
              <span>Languages: </span>
              <ul>
                {languages?.map((language) => {
                  return <li key={language.nativeName}>{language.name}</li>;
                })}
              </ul>
            </p>
          </div>
          <div className="detailsCard__borders">
            <h3>Border Countries:</h3>
            <ul className="detailsCard__borderCountries">
              {borderCountries?.map((country) => {
                return <li key={country}>{country}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
