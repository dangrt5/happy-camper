import React from 'react';

import sunnyDescriptionIcon from "../assets/images/icons/weather/sun-sunny-day-weather-symbol.png";
import rainDescriptionIcon from "../assets/images/icons/weather/rain-weather-symbol.png"
import snowDescriptionIcon from "../assets/images/icons/weather/cold-hail-falling-of-a-cloud-weather-interface-symbol.png"
import cloudsDescriptionIcon from "../assets/images/icons/weather/cloud-shape-outlined-symbol.png"
import mistDescriptionIcon from "../assets/images/icons/weather/fog.png"


import rainIcon from "../assets/images/icons/weather/001-umbrella.png";
import humidityIcon from "../assets/images/icons/weather/003-humidity.png";
import windIcon from "../assets/images/icons/weather/002-wind-sign.png";

export default class WeatherItem extends React.Component {
    state = {
        day: null,
        date: null,
        humidity: null,
        rain: null,
        speed: null,
        maxTemp: null,
        minTemp: null,
        description: null,
        icon: null,
    }
    componentDidMount(){
        let {humidity, rain, speed, temp, weather, dt} = this.props.item;
        let {max, min} = temp;
        const description = weather[0].main;
        max = Math.round(max);
        min = Math.round(min);
        speed = Math.round(speed);

        console.log(dt)

        dt = new Date(dt * 1000).toDateString()
        dt = dt.split(" ")
        let day = dt[0];
        let date = dt.slice(1,3).join(" ");

        if (typeof rain == 'undefined'){
            rain = 0
        }
        rain = Math.round(rain)

        let icon;
        switch (description){
            case "Rain":
                icon = rainDescriptionIcon;
                break;
            case "Clouds":
                icon = cloudsDescriptionIcon;
                break;
            case "Snow":
                icon = snowDescriptionIcon;
                break;
            case "Mist":
                icon = mistDescriptionIcon;
                break;
            default:
                icon = sunnyDescriptionIcon;
        }

        this.setState({
            day: day,
            date: date,
            humidity: humidity,
            rain: rain,
            speed: speed,
            maxTemp: max,
            minTemp: min,
            description: description,
            icon: icon
        })
    }
    render(){
        const {day, date, humidity, rain, speed, maxTemp, minTemp, description, icon} = this.state;
        return(
            <div className="weather-item">
                <div className="weather-day">
                    <h3>{day}</h3>
                    <h3>{date}</h3>
                </div>
                <div className="weather-symbol">
                    <img src={icon}/>
                </div>
                <div className="weather-temp">
                    <h3>{maxTemp}° / {minTemp}°</h3>
                    <h3>{description}</h3>
                </div>
                <div className="weather-other-container">
                    <div className="weather-other">
                        <img src={rainIcon}/><span>{rain} mm</span>
                    </div>
                    <div className="weather-other">
                        <img src={humidityIcon}/><span>{humidity}%</span>
                    </div>
                    <div className="weather-other">
                        <img src={windIcon}/><span>{speed} mph</span>
                    </div>
                </div>
            </div>
        )
    }
}
