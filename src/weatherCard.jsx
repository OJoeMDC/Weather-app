  import { useState, useEffect } from 'react'
  import './WeatherCard.css'
  import {
    WiRaindrop,
  } from "react-icons/wi";

  function WeatherCard({ weather, day, isFahrenheit, setIsFahrenheit, selectedDay, setSelectedDay }) {

  const dayData = weather.forecast.forecastday[day];

  const unit = isFahrenheit ? "F" : "C";  
  const avgTemp = isFahrenheit
      ? dayData.day.avgtemp_f
      : dayData.day.avgtemp_c;

  const date = dayData?.date;
  const weekday = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
  });

  const rainChance = dayData?.day.daily_chance_of_rain;
  const iconUrl = dayData?.day?.condition?.icon;
  const condition = dayData?.day?.condition?.text;


      return (
          <div 
          className={`weather-card ${selectedDay === day ? "selected-card" : ""}`}
          onClick={() => {setSelectedDay(day); console.log(day);}}>
              <h2 className = "title">{weekday}</h2>
              <div className = "icon">
                  <img src={iconUrl} alt={condition} />
              </div>
              <p className = "range">{avgTemp}°{unit}</p>
              <div className = "rain">
                <WiRaindrop/><p>{rainChance}%</p>
              </div>
          </div>

      );
  }


  export default WeatherCard;