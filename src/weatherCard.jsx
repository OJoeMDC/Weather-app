import { useState, useEffect } from 'react'
import './WeatherCard.css'
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiNightClear,
  WiDayCloudy,
  WiRaindrop,
  WiStrongWind,
} from "react-icons/wi";


function WeatherCard({weather}) {

// if (!selectedDay || !selectedHour) {
//     return null;
// }
const tempF = weather.current.temp_f;
const highF = weather.forecast.forecastday[0].day.maxtemp_f;
const lowF = weather.forecast.forecastday[0].day.mintemp_f;
const rainChance = weather.current.chance_of_rain;
const snowChance = weather.current.chance_of_snow;
const cloud = weather.current.cloud;


function WeatherIcon({ rainChance }) {

  if (rainChance <= 30) {
    return <WiDaySunny/>;
  }

  if (rainChance <= 50) {
    return <WiDayCloudy/>;
  }

  if (rainChance <= 70) {
    return <WiCloud/>;
  }

  return <WiRain/>;
}


    return (
        <div className ='weather-card'>
            <h2 className = "title">{tempF}°F</h2>
            <div className = "icon">
                <WeatherIcon rainChance={rainChance} />
            </div>
            <p className = "range">Hi: {highF}°F</p>
            <p className = "range">Lo: {lowF}°F</p>
        </div>

    );
}


export default WeatherCard;