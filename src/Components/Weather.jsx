/**
 * author-UKSD
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../ComponentStyles/WeatherStyle.css";
import { Link } from 'react-router-dom';

//background
import cloudybg from '../assets/cloudybg.png';
import mildsunbg from '../assets/mildsunbg.png';
import sunnybg from '../assets/sunnybg.png';
import snowbg from '../assets/snowbg.png';

//images
import mildfogimg from '../assets/mildfogimg.png';
import snowflake from '../assets/snowflake.png';
import stormimg from '../assets/stormimg.png';
import sunnyimg from '../assets/sunnyimg.png';

import refresh from '../assets/refresh.png';

//sample
import NormalPage from '../samples/NormalPage.png';

var months = ["Januray", "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

const api = axios.create({
    baseURL: `http://localhost:5000/`
})

class Weather extends React.Component {
    constructor() {
        super();

        this.state = {
            city: "Shree",
            country: "IN",
            temp: "000.00",
            humid: "00",
            sky: "Shree",
            skydesc: "Shree",
            monthtxt: months[9],
            time: "00",
            date: "00",
            month: "00",
            rainbg: cloudybg,
            sunbg: sunnybg,
            mildsun: mildsunbg,
            snowbg: snowbg,
            daycloud: mildfogimg,
            ngtcloud: stormimg,
            sunny: sunnyimg,
            snow: snowflake,
            img: mildfogimg
        }
        api.get("/").then(res => {
            this.setState({
                city: res.data.city,
                country: res.data.country,
                temp: res.data.temp,
                humid: res.data.humid,
                sky: res.data.sky,
                skydesc: res.data.skydesc,
                time: res.data.time,
                month: res.data.month,
                date: res.data.date
            })
        });
    }

    dateChanger = () => {
        if (this.state.month === "01") {
            this.setState({
                monthtxt: months[0]
            })
        } else if (this.state.month === "02") {
            this.setState({
                monthtxt: months[1]
            })
        } else if (this.state.month === "03") {
            this.setState({
                monthtxt: months[2]
            })
        } else if (this.state.month === "04") {
            this.setState({
                monthtxt: months[3]
            })
        } else if (this.state.month === "05") {
            this.setState({
                monthtxt: months[4]
            })
        } else if (this.state.month === "06") {
            this.setState({
                monthtxt: months[5]
            })
        } else if (this.state.month === "07") {
            this.setState({
                monthtxt: months[6]
            })
        } else if (this.state.month === "08") {
            this.setState({
                monthtxt: months[7]
            })
        } else if (this.state.month === "09") {
            this.setState({
                monthtxt: months[8]
            })
        } else if (this.state.month === "10") {
            this.setState({
                monthtxt: months[9]
            })
        } else if (this.state.month === "11") {
            this.setState({
                monthtxt: months[10]
            })
        } else if (this.state.month === "12") {
            this.setState({
                monthtxt: months[11]
            })
        }
    }


    imgChanger = () => {
        if (this.state.sky == "Rain" || "Clouds" && this.state.time < 19) {
            this.setState({
                img: mildfogimg
            })
        } else if (this.state.sky == "Rain" || "Clouds" && this.state.time > 19) {
            this.setState({
                img: stormimg
            })
        } else if (this.state.sky == "Sunny" && this.state.time < 19) {
            this.setState({
                img: sunnyimg
            })
        }

    }

    bgChanger = () => {
        var climates = ["Rain", "Clouds"];
        if (this.state.sky == "Rain" || "Clouds") {
            document.body.style.backgroundImage = sunnybg;

        } else if (this.state.sky == "Sunny") {
            this.setState({
                img: sunnyimg
            })
        }
    }

    refresh = () => {
        if (window.location.reload(false)) {
            alert("Live Feed Updated!");
        }
    }

    render() {
        return (
            <div className="mainContainer" onLoad={this.bgChanger} >
                <div className="navbar">
                    {this.bgChanger}
                    <h5 onClick={this.refresh} className='refresher'>Click here to Refresh for Live Feed</h5>
                </div>
                <div className="weatherContainer">
                    <img className="image-humidity" src={this.state.img} alt="weather-icon" />
                    <h2 className="temp">{this.state.temp}</h2>
                    <h1 className="weather">{this.state.sky}</h1>
                    <h3 className="image-humidity">H : {this.state.humid}</h3>
                    <h2 className="mildweather">Later : {this.state.skydesc}</h2>
                    <h2>{this.state.monthtxt} {this.state.date}</h2>
                    <h1 className="city-country">{this.state.city}</h1>
                    <h1 className="city-country">-</h1>
                    <h1 className="city-country">{this.state.country}</h1>
                </div>
                <div className="cities">
                    <ul>
                        <li><Link to="/">Tirupur</Link></li>
                        <li><Link to="/coimbatore">Coimbatore</Link></li>
                        <li><Link to="/chennai">Chennai</Link></li>
                        <li><Link to="/ooty">Ooty</Link></li>
                        <li><Link to="/pollachi">Pollachi</Link></li>
                        <li><Link to="/trichy">Trichy</Link></li>
                        <li><Link to="/erode">Erode</Link></li>
                        <li><Link to="/theni">Theni</Link></li>
                        <li><Link to="/salem">Salem</Link></li>
                        <li><Link to="/madurai">Madurai</Link></li>
                        <li><Link to="/namakkal">Namakkal</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Weather;