import React from "react";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountryPage } from "../store/countrySlicer";
import { Link } from "react-router-dom";

function Card({ name, population, region, capital, flags }) {
  const check = useSelector((state) => state.country.check);
  const dispatch = useDispatch();

  return (
    <div className={`card ${check ? "elementDark" : "elementLight"}`}>
      <Link to={`/country/${name.common}`}>
        <img src={flags.png} alt="Country" />
      </Link>
      <div className="details">
        <h5>{name.common}</h5>
        <p>Populatin : {population}</p>
        <p>Region : {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
}

export default Card;
