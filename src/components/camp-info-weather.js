import React from 'react';
import axios from 'axios';
import WeatherItem from './camp-info-weather-item'
import config from './config/config'


export default class Weather extends React.Component {
    state = {
        weather: [],
    }
    componentDidMount(){
        if(!window.navigator.onLine){
            const itinerary = JSON.parse(localStorage.getItem('itinerary'))
            let item = itinerary.filter(item => item.parkinfo[0].lat === this.props.lat && item.parkinfo[0].lng === this.props.lng)
            this.setState({
                weather: item[0].weather
            })
        } else {
            this.getWeatherData();
        }
    }
    async getWeatherData(){
        const {lat, lng} = this.props
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&units=imperial&cnt=15&appid=${config.WEATHER_KEY}`)
        this.setState({
            weather: resp.data.list
        })

    }
    render(){
        const {weather} = this.state;

        if(!weather.length){
            return <div className="loading-spinner"></div>
        }

        const weatherElements = weather.map(item=>{
            return <WeatherItem key={item.dt} item={item}/>
        })
        return(
        <div className="weather">
            {weatherElements}
            <p>Powered by OpenWeather API</p>
        </div>
        )
    }
}
