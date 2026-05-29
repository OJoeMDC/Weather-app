import { useState, useEffect } from 'react'
import './WeatherCard.css'
import {
  WiRaindrop,
} from "react-icons/wi";


function WeatherCard({ weather, day }) {
const selectedDay = weather?.forecast?.forecastday?.[day];
if (!selectedDay) return null;

const date = selectedDay?.date;
const weekday = new Date(date).toLocaleDateString("en-US", {
  weekday: "short",
});

const tempF = weather.current.temp_f;
const highF = selectedDay?.day.maxtemp_f;
const lowF = selectedDay?.day.mintemp_f;
const rainChance = selectedDay?.day.daily_chance_of_rain;
const snowChance = selectedDay?.day.chance_of_snow;
const cloud = selectedDay?.day.cloud;
const avgTemp = selectedDay?.day.avgtemp_f;
const iconUrl = selectedDay?.day?.condition?.icon;
const condition = selectedDay?.day?.condition?.text;


    return (
        <div className ='weather-card'>
            <h2 className = "title">{weekday}</h2>
            <div className = "icon">
                <img src={iconUrl} alt={condition} />
            </div>
            <p className = "range">{avgTemp}°</p>
            <div className = "rain">
              <WiRaindrop/><p>{rainChance}%</p>
            </div>
        </div>

    );
}


export default WeatherCard;