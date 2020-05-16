import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import car from "../car.jpg";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #2ba2d3;
`;

const Search = () => {
  let location = useLocation();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = location.searchParam;
    axios
      .post("https://car-owners.herokuapp.com/cars/find", data)
      .then((res) => {
        setCars(res.data.cars);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);

  if (loading) {
    return (
      <ClipLoader
        css={override}
        size={40}
        color={"#2ba2d3"}
        loading={loading}
      />
    );
  } else {
    return (
      <div className="container">
        <h4
          style={{ marginTop: 20, padding: "20px" }}
          class={cars.length < 1 ? "hidden" : ""}
        >
          Car Owners
        </h4>
        <h4 style={{ marginTop: 20, padding: "20px" }} class="text-center">
          {cars.length < 1 ? "No Cars fit this description" : ""}
        </h4>
        {cars.map((aCar, h) => {
          return (
            <div class="card m-3" style={{ borderRadius: "30px" }}>
              <div class="row">
                <div class="col md-4" style={{ marginRight: -100 }}>
                  <div
                    class="card border-light"
                    style={{ borderRadius: "20px" }}
                  >
                    <img src={car} alt="Car" width={"400"} />
                  </div>
                </div>
                <div
                  class="col md-8"
                  padding="10px"
                  style={{ marginLeft: -100 }}
                >
                  <div class="card border-light" style={{ marginTop: 25 }}>
                    <p class="title">
                      {aCar.first_name + " " + aCar.last_name}
                    </p>
                    <div class="row">
                      <div class="col-md-4 border-right border-dark">
                        <p class="c-grey">Brand</p>
                        <p>{aCar.car_model}</p>
                      </div>
                      <div class="col-md-4 margin-0 border-left border-dark">
                        <p class="c-grey">Year</p>
                        <p>{aCar.car_model_year}</p>
                      </div>
                      <div
                        class="col-md-4 margin-0 "
                        style={{ paddingLeft: 25 }}
                      >
                        <p class="c-grey">Color</p>
                        <div
                          class="c-color"
                          style={{ backgroundColor: `${aCar.car_color}` }}
                        ></div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <p class="c-grey">Country</p>
                        <p>{aCar.country}</p>
                      </div>
                      <div class="col-md-2 margin-0">
                        <p class="c-grey">Gender</p>
                        <p>{aCar.gender}</p>
                      </div>
                      <div class="col-md-6">
                        <p class="c-grey">Job</p>
                        <p>{aCar.job_title}</p>
                      </div>
                    </div>
                    <div class="row" style={{ marginLeft: 0 }}>
                      <p class="c-grey">Email: </p>
                      <p style={{ padding: 2 }}>{aCar.email}</p>
                    </div>
                    <div class="row" style={{ marginLeft: 0 }}>
                      <p class="c-grey">Bio:</p>
                      <p style={{ padding: 2 }}>{`${aCar.bio.slice(0, 70)}${
                        aCar.bio.length > 70 ? "..." : null
                      }`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Search;
