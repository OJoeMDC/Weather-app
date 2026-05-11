import { useState, useEffect } from 'react'
import './WeatherCard.css'


function WeatherCard({weather}) {
const city = weather.location.name;
const tempF = weather.current.temp_f;
const maxTemp = weather.forecast.forecastday[0].day.maxtemp_f;
const minTemp = weather.forecast.forecastday[0].day.mintemp_f;

    return (
        <div className='weather-card'>
            {/* <h2>title</h2> */}
            <h3>City: {city}</h3>
            <p>Now: {tempF}</p>
            <p>High: {maxTemp}</p>
            <p>Low: {minTemp}</p>
        </div>
    );
}


export default WeatherCard;