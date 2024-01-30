import React, { useEffect, useMemo } from "react";
import { getCountryPage } from "../../store/countrySlicer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Country.css";
const Country = () => {
  const { single, singleLaod, check } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  let { id } = useParams();

  const singleName = useMemo(() => {
    if (single) {
      return Object.keys(single[0]?.name?.nativeName)?.map(
        (key) => single[0]?.name?.nativeName[key]
      )[0]?.common;
    }
  }, [single]);
  const curren = useMemo(() => {
    if (single) {
      return Object.values(single[0].currencies);
    }
  }, [single]);

  const borders = useMemo(() => {
    if (single) {
      return Object.values(single[0].borders);
    }
  }, [single]);

  useEffect(() => {
    dispatch(getCountryPage(id));
  }, [dispatch, id, singleLaod]);

  return singleLaod ? (
    <div>Loading</div>
  ) : (
    <div>
      {single && (
        <div className={`country ${check ? "dark" : "light"}`}>
          <button className={`${check ? "elementDark" : "elementLight"}`}>
            <Link
              className={`link ${check ? "elementDark" : "elementLight"}`}
              to={"alihassan-countries-api.netlify.app"}
            >
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
              Back
            </Link>
          </button>
          <div className="content">
            <div className="img-top">
              <img src={single[0].flags.png} alt="" />
            </div>
            <div className="content-country">
              <div className="head">
                <h2>{single[0].name.common}</h2>
              </div>
              <div className="text">
                <div className="t-left">
                  <p>Native name : {singleName && singleName}</p>
                  {/* <p>Native name : </p> */}
                  <p>Population : {single[0].population}</p>
                  <p>Region : {single[0].region} </p>
                  <p>Sub Region : {single[0].subregion}</p>
                  <p>Capital : {single[0].capital}</p>
                </div>
                <div className="t-right">
                  <p>Top Level Domain:{single[0].tld[0]} </p>
                  <p>
                    Currencies:{" "}
                    {curren.map((item) => Object.values(item).join(" "))}
                  </p>
                  <p>
                    Languages : {Object.values(single[0].languages).join(" ")}
                  </p>
                </div>
              </div>
              <div className="border">
                <p>borders countries:</p>
                {borders.map((item) => (
                  <p
                    className={`btn-border ${
                      check ? "elementDark" : "elementLight"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
