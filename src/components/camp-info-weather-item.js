import React from 'react';
import sunny from "../assets/images/icons/weather/sun-sunny-day-weather-symbol.png";
import rain from "../assets/images/icons/weather/001-umbrella.png";
import humidity from "../assets/images/icons/weather/003-humidity.png";
import wind from "../assets/images/icons/weather/002-wind-sign.png";

export default class WeatherItem extends React.Component {
    render(){
        return(
            <div className="weather-item">
                <div className="weather-day">
                    <h3>Friday</h3>
                    <h3>Sep 22</h3>
                </div>
                <div className="weather-symbol">
                    <img src={sunny}/>
                </div>
                <div className="weather-temp">
                    <h3>91° / 53°</h3>
                    <h3>Sunny</h3>
                </div>
                <div className="weather-other-container">
                    <div className="weather-other">
                        <img src={rain}/><span>10%</span>
                    </div>
                    <div className="weather-other">
                        <img src={humidity}/><span>79%</span>
                    </div>
                    <div className="weather-other">
                        <img src={wind}/><span>10 mph</span>
                    </div>
                </div>
            </div>
        )
    }
}
