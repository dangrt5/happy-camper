import React from 'react';
import WeatherItem from './camp-info-weather-item'



export default class Weather extends React.Component {
    render(){
        return(
        <div className="weather">
            <WeatherItem />
        </div>
        )
    }
}
