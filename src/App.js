import React from 'react';
import './App.css';
import axios from 'axios';
import car from './car.jpg';
import filter from './filter.svg';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #2ba2d3;
`;

class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isToggleOn: true,
                isLoading: true,
                cars: [],
                error: null,
<<<<<<< HEAD
                loading: true,
                emptyCars: false
=======
                loading: true
>>>>>>> 01e70eef715b307231e31f44745b5645980d90d0
            };
            this.showFilters = this.showFilters.bind(this);
        }
        
        showFilters() {
            this.setState(state => ({
                isToggleOn: !state.isToggleOn,
                loading: false,
            }));
        }

        async fetchCars() {
            try {
<<<<<<< HEAD
                const response = await axios.get(`https://car-owners.herokuapp.com/cars`);
=======
                const response = await axios.get(`http://localhost:3000/cars`);
>>>>>>> 01e70eef715b307231e31f44745b5645980d90d0
                let data = response.data.cars;
                    this.setState({
                      cars: data,
                      loading: false,
                    })
            } catch (error) {
                console.log(error)
            }
        }

        async useFilter(data) {
            this.setState(state => ({
                isToggleOn: !state.isToggleOn,
                loading: true,
            }))
            try {
<<<<<<< HEAD
                const response = await axios.post(`https://car-owners.herokuapp.com/cars/find`, {
                    data
                });
                let res = response.data.cars;
                if(res.length < 1) {
                    this.setState({
                        emptyCars: true
                    })
                }
                this.setState({
                    cars: res,
                    isLoading: false,
                    loading: false,
                })
=======
                const response = await axios.post(`http://localhost:3000/cars/find`, {
                    data
                });
                let res = response.data.cars;
                    this.setState({
                      cars: res,
                      isLoading: false,
                      loading: false,
                    })
>>>>>>> 01e70eef715b307231e31f44745b5645980d90d0
            } catch (error) {
                console.log(error)
            }
        }

<<<<<<< HEAD
        async getFilters(){
            try {
                const res = await axios.get('https://ven10.co/assessment/filter.json')
                console.log(res)
            } catch (error) {
                
            }
        }

        componentDidMount() {
            this.fetchCars();
            this.getFilters();
=======
        componentDidMount() {
            this.fetchCars();
>>>>>>> 01e70eef715b307231e31f44745b5645980d90d0
        }
        render() {
            const filters = [{
                "id": 1,
                "start_year": 1991,
                "end_year": 2009,
                "gender": "male",
                "countries": ["Brazil", "Ireland", "Egypt", "Poland", "Niger", "Greece", "Peru"],
                "colors": ["Green", "Violet", "Yellow", "Blue"]
            }, {
                "id": 2,
                "start_year": 1990,
                "end_year": 2010,
                "gender": "",
                "countries": ["Russia", "Portugal", "Vietnam", "Croatia", "Uganda", "Iran"],
                "colors": ["Teal", "Maroon", "Red"]
            }, {
                "id": 3,
                "start_year": 2001,
                "end_year": 2009,
                "gender": "female",
                "countries": [],
                "colors": ["Red", "Aquamarine", "Orange", "Mauv"]
            }, {
                "id": 4,
                "start_year": 1990,
                "end_year": 2000,
                "gender": "",
                "countries": ["United States"],
                "colors": []
            }, {
                "id": 5,
                "start_year": 2000,
                "end_year": 2009,
                "gender": "",
                "countries": ["Myanmar", "South Africa", "Nicaragua", "Finland", "Cuba", "Mexico"],
                "colors": []
            }];
            return ( <div className = "container" >
                <div class="row" style={{cursor: 'pointer', padding: '20px'}} onClick={this.showFilters}>
                    <img src={filter} alt="Filter" height="25" width='25'/>
                    <h4> Filter</h4> 
                </div>
                <ClipLoader
                        css={override}
                        size={40}
                        color={"#2ba2d3"}
                        loading={this.state.loading}
                />
                <div class="row" className={this.state.isToggleOn ? 'hidden' : ''}> 
                {
                    filters.map((value, i) => {
                            return ( 
                            <div class="col-md-12 smCard" key={i} style={{cursor: 'pointer'}} onClick={() => this.useFilter(value)}>
                                <div class="card shadow-sm bg-white rounded" style={{borderRadius: '50px'}}>
                                    <div class="card-body" >
                                        <h5 class="card-title" > {value.start_year } </h5> 
                                        <p class="card-text" > { value.gender ? value.gender : "No Gender" } </p> 
                                        <div class="d-flex justify-content-center">
                                            {
                                                value.countries.map((val, j) => {
                                                    return (
                                                        <div class="country" key={j}>
                                                            <p class="card-text c-align">{ val }</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            {
                                                value.colors.map((val, k) => {
                                                    return (
                                                        <div class="c-color" key={k} style={{backgroundColor: `${val}`}}>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> 
                                </div> 
                            </div>)
                            })
                    } </div> 
                    <h4 style={{marginTop: 20, padding: '20px'}} class={this.state.cars.length < 1 ? 'hidden' : ''}>Car Owners</h4>
<<<<<<< HEAD
                    <h4 style={{marginTop: 20, padding: '20px'}} class="text-center">{this.state.emptyCars ? 'No Cars fit this description' : ''}</h4>
=======
                    <h4 style={{marginTop: 20, padding: '20px'}} class="text-center">{this.state.cars.length < 1 ? 'No Cars fit this description' : ''}</h4>
>>>>>>> 01e70eef715b307231e31f44745b5645980d90d0
                        {
                            this.state.cars.map((aCar, h) => {
                                return (
                                <div class="card m-3" style={{borderRadius: '30px'}}>
                                    <div class="row">
                                        <div class="col md-4" style={{ marginRight: -100}}>
                                            <div class="card border-light" style={{borderRadius: '20px'}}>
                                                <img src={car} alt="Car" width={'400'}/>
                                            </div>
                                        </div>
                                        <div class="col md-8" padding="10px" style={{ marginLeft: -100}}>
                                            <div class="card border-light" style={{marginTop: 25}}>
                                                <p class="title">{aCar.first_name + " " + aCar.last_name}</p>
                                                <div class="row">
                                                    <div class="col-md-4 border-right border-dark">
                                                        <p class="c-grey">Brand</p>
                                                        <p>{aCar.car_model}</p>
                                                    </div>
                                                    <div class="col-md-4 margin-0 border-left border-dark">
                                                        <p class="c-grey">Year</p>
                                                        <p>{aCar.car_model_year}</p>
                                                    </div>
                                                    <div class="col-md-4 margin-0 " style={{paddingLeft: 25}}>
                                                        <p class="c-grey">Color</p>
                                                        <div class="c-color" style={{backgroundColor: `${aCar.car_color}`}}>
                                                        </div>
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
                                                <div class="row" style={{marginLeft: 0}}>
                                                    <p class="c-grey">Email: </p>
                                                    <p style={{padding: 2}}>{aCar.email}</p>
                                                </div>
                                                <div class="row" style={{marginLeft: 0}}>
                                                    <p class="c-grey">Bio:</p>
                                                    <p style={{padding: 2}}>{`${aCar.bio.slice(0, 70)}${aCar.bio.length > 70 ? '...' : null}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    {/* </div>  */}
                </div>
                )
            }
        }

        export default App;