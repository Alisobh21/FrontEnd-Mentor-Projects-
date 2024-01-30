import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";

import {
  getCountries,
  getCountry,
  filterCountry,
  getCountryPage,
} from "../../store/countrySlicer";
import Card from "../../component/Card";
function Home() {
  const check = useSelector((state) => state.country.check);
  const countries = useSelector((state) => state.country.countries);
  const [name, setName] = useState(null);
  const [region, setRegion] = useState(null);
  const dispatch = useDispatch();

  const formattedObj = countries
    ?.flat()
    ?.map((item) => item?.name)
    ?.map((item) => item?.nativeName);

  console.log(
    "PURE DATA",
    formattedObj?.map((item) =>
      item ? Object?.keys(item)?.map((key) => item[key]?.common)[0] : item
    )
  );

  useEffect(() => {
    if (name) {
      dispatch(getCountry(name));
    } else if (region) {
      dispatch(filterCountry(region));
    } else {
      dispatch(getCountries());
    }
  }, [dispatch, name, region]);
  return (
    <div className="container">
      <div className="top">
        <input
          onChange={(e) => setName(e.target.value)}
          className={`${check ? "elementDark" : "elementLight"}`}
          type="text"
          placeholder="&#xf002;  Search for a country"
          style={{ fontFamily: "arial, fontawesome" }}
        />

        <select
          className={`${check ? "elementDark" : "elementLight"}`}
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="card-con">
        <div className="cards">
          {countries &&
            countries.map((country, i) => {
              return <Card key={i} {...country} />;
            })}
        </div>
      </div>
    </div>
  );
}
export default Home;
