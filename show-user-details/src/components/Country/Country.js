import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Country = () => {
  let { countryName } = useParams();
  let [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      {country.map((ele) => {
        return (
          <div>
            <h1>Official Name: {ele.name.official}</h1>
            <h3>region : {ele.region}</h3>
            <p>population: {ele.population}</p>
            <img src={ele.flags.png} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Country;
