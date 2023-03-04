import React from "react";

const Filter = ({ setRegion }) => {
  function handleChange(e) {
    setRegion(e.target.value);
  }

  return (
    <select
      id="region"
      name="region"
      className="main__filter"
      onChange={handleChange}
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Filter;
