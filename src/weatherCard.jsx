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


function WeatherCard({ weather, day }) {

const selectedDay = weather?.forecast?.forecastday?.[day];

const date = selectedDay?.date;
const weekday = new Date(date).toLocaleDateString("en-US", {
  weekday: "short",
});

const tempF = weather.current.temp_f;
const highF = selectedDay?.day.maxtemp_f;
const lowF = selectedDay?.day.mintemp_f;
const rainChance = weather.current.chance_of_rain;
const snowChance = weather.current.chance_of_snow;
const cloud = weather.current.cloud;
const avgTemp = selectedDay?.day.avgtemp_f;


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
            <h2 className = "title">{weekday}</h2>
            <div className = "icon">
                <WeatherIcon rainChance={rainChance} />
            </div>
            <p className = "range">{avgTemp}°</p>
            <div className = "rain">
              <WiRaindrop/><p>{rainChance}%</p>
            </div>
        </div>

    );
}


export default WeatherCard;