import React from 'react';
import './App.css';
import axios from 'axios';
import car from './car.jpg';
import filter from './filter.svg';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";


class FilterDetail extends React.Component {
    render() {
        return (
            <div>
                {/* <h4 style={{marginTop: 20, padding: '20px'}} class={this.state.cars.length < 1 ? 'hidden' : ''}>Car Owners</h4>
                    <h4 style={{marginTop: 20, padding: '20px'}} class="text-center">{this.state.emptyCars ? 'No Cars fit this description' : ''}</h4>
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
                        } */}

            </div>
        )
    }
}