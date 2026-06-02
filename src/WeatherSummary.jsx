import './WeatherSummary.css';
import React, { useState } from "react";

// Convert wind direction in degrees to cardinal direction
function getWindDirection(degrees) {
  const directions = [
    "N", "NE", "E", "SE",
    "S", "SW", "W", "NW"
  ];

  return directions[Math.round(degrees / 45) % 8];
}

function WeatherSummary({ weather, selectedCity, isFahrenheit, setIsFahrenheit, selectedDay, setSelectedDay }) {
    const selectedForecast = weather?.forecast?.forecastday[selectedDay];
    const date = selectedForecast?.date;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

    if (!weather) return null;
    const unit = isFahrenheit ? "F" : "C";

  const temp = isFahrenheit ? selectedForecast.day?.avgtemp_f : selectedForecast.day?.avgtemp_c;
  const feelsLike = isFahrenheit ? selectedForecast.hour[12].feelsLike_f : selectedForecast.hour[12].feelsLike_c;
  const high = isFahrenheit ? selectedForecast.day?.maxtemp_f : selectedForecast.day?.maxtemp_c;
  const low = isFahrenheit ? selectedForecast.day?.mintemp_f : selectedForecast.day?.mintemp_c;

  const windSpeed = weather.current?.wind_mph;
  const windDirection = weather.current?.wind_degree;
  const condition = weather.current?.condition?.text;
  const iconUrl = weather.current?.condition?.icon;
  const humidity = weather.current?.humidity;

//   Stops the region from dispalying if it has same name as city and displays country instead
  const displayRegion =
  !weather
    ? ""
    : !weather.location.region || weather.location.region === weather.location.name
      ? weather.location.country
      : weather.location.region;

  const windDirectionText = getWindDirection(windDirection);

  return (
    <>
            <div className="weather-info">
                <div className="city-header">
                    <div className="city-info">
                        <h2 className="city-name">{weather.location.name},</h2>
                        <p className="region">{displayRegion}</p>
                    </div>
                </div>
                <div className="weather-details"> 
                    <div className="condition-info">
                        <h3>{formattedDate}</h3>
                        <img src={iconUrl} alt={condition} className="weather-icon" />
                        <p className="temp">{temp}°{unit}</p>
                        <p className="condition">{condition}</p>
                        <p className="feels-like">Feels like: {feelsLike}°{unit}</p>
                    </div>

                    <div className="unit-toggle">
                                <span
                                    className={isFahrenheit ? "active" : "inactive"}
                                    onClick={() => setIsFahrenheit(true)}>°F
                                </span>
                                <span> | </span>
                                <span
                                    className={!isFahrenheit ? "active" : "inactive"}
                                    onClick={() => setIsFahrenheit(false)}>°C
                                </span>
                        </div>

                    <div className="details">
                        <p className="high">High: {high}°{unit}</p>
                        <p className="low">Low: {low}°{unit}</p>
                        <p className="wind-speed">Wind: {windSpeed} mph</p>
                        <p className="wind-direction">Wind Direction: {windDirectionText}</p>
                        <p className="humidity">Humidity: {humidity}%</p>
                    </div>
                </div>
            </div>
    </>
    );
}

export default WeatherSummary;
