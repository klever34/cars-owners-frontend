import React from "react";
import "../App.css";
import axios from "axios";
import filter from "../filter.svg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isLoading: true,
      cars: [],
      error: null,
      loading: true,
      emptyCars: false,
    };
    this.showFilters = this.showFilters.bind(this);
  }

  showFilters() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
      loading: false,
    }));
  }

  async fetchCars() {
    try {
      const response = await axios.get(`https://car-owners.herokuapp.com/cars`);
      let data = response.data.cars;
      this.setState({
        cars: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.fetchCars();
  }
  render() {
    const filters = [
      {
        id: 1,
        start_year: 1991,
        end_year: 2009,
        gender: "Male",
        countries: [
          "Brazil",
          "Ireland",
          "Egypt",
          "Poland",
          "Niger",
          "Greece",
          "Peru",
        ],
        colors: ["Green", "Violet", "Yellow", "Blue"],
      },
      {
        id: 2,
        start_year: 1990,
        end_year: 2010,
        gender: "",
        countries: [
          "Russia",
          "Portugal",
          "Vietnam",
          "Croatia",
          "Uganda",
          "Iran",
        ],
        colors: ["Teal", "Maroon", "Red"],
      },
      {
        id: 3,
        start_year: 2001,
        end_year: 2009,
        gender: "Female",
        countries: [],
        colors: ["Red", "Aquamarine", "Orange", "Mauv"],
      },
      {
        id: 4,
        start_year: 1990,
        end_year: 2000,
        gender: "",
        countries: ["United States"],
        colors: [],
      },
      {
        id: 5,
        start_year: 2000,
        end_year: 2009,
        gender: "",
        countries: [
          "Myanmar",
          "South Africa",
          "Nicaragua",
          "Finland",
          "Cuba",
          "Mexico",
        ],
        colors: [],
      },
    ];
    return (
      <div className="container">
        <div
          className="row"
          style={{ cursor: "pointer", padding: "20px" }}
        >
          <img src={filter} alt="Filter" height="25" width="25" />
          <h4 style={{ fontFamily: "Poppins", paddingLeft: 10 }}> Filter</h4>
        </div>
        <div className="row">
          {filters.map((value, i) => {
            return (
              <div
                className="col-md-12 smCard"
                key={i}
                style={{ cursor: "pointer", borderRadius: "50px" }}
              >
                <Link
                style={{textDecoration: 'none', color: '#000'}}
                  to={{
                    pathname: "/search",
                    searchParam: value,
                  }}
                >
                  <div
                    className="card shadow-sm bg-white rounded"
                    style={{ borderRadius: "50px" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        {value.start_year} - {value.end_year}{" "}
                      </h5>
                      <p
                        className="card-text"
                        style={{ textTransform: "capitalize" }}
                      >
                        {" "}
                        {value.gender ? value.gender : "No Gender"}{" "}
                      </p>
                      <div className="d-flex justify-content-center">
                        {value.countries.map((val, j) => {
                          return (
                            <div className="country" key={j}>
                              <p className="card-text c-align">{val}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="d-flex justify-content-center">
                        {value.colors.map((val, k) => {
                          return (
                            <div
                              className="c-color"
                              key={k}
                              style={{ backgroundColor: `${val}` }}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  }
}

export default Home;
