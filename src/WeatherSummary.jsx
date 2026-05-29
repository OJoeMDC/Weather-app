import './WeatherSummary.css';
import React, { useState } from "react";

function WeatherSummary({ weather, selectedCity }) {
    if (!weather) return null;
    const [isFahrenheit, setIsFahrenheit] = useState(true);
  const unit = isFahrenheit ? "F" : "C";

  const temp = isFahrenheit ? weather.current?.temp_f : weather.current?.temp_c;
const feelsLike = isFahrenheit ? weather.current?.feelslike_f : weather.current?.feelslike_c;
  const high = isFahrenheit ? weather.forecast?.forecastday[0]?.day?.maxtemp_f : weather.forecast?.forecastday[0]?.day?.maxtemp_c;
  const low = isFahrenheit ? weather.forecast?.forecastday[0]?.day?.mintemp_f : weather.forecast?.forecastday[0]?.day?.mintemp_c;

  const windSpeed = weather.current?.wind_mph;
  const windDirection = weather.current?.wind_degree;
  const condition = weather.current?.condition?.text;
  const iconUrl = weather.current?.condition?.icon;
  const region = weather.location?.region;
  const humidity = weather.current?.humidity;

  return (
    <>
            <div className="weather-info">
                <div className="city-header">
                    <div className="city-info">
                        <h2 className="city-name">{selectedCity},</h2>
                        <p className="region">{region}</p>
                    </div>
                    <div className="button-container">
                        <button className="temp-toggle" onClick={() => setIsFahrenheit(!isFahrenheit)}>
                            Show {isFahrenheit ? "°C" : "°F"}
                        </button>
                    </div>
                </div>
                <div className="weather-details"> 
                    <div className="condition-info">
                        <img src={iconUrl} alt={condition} className="weather-icon" />
                        <p className="temp">{temp}°{unit}</p>
                        <p className="condition">{condition}</p>
                        <p className="feels-like">Feels like: {feelsLike}°{unit}</p>
                    </div>


                    <div className="details">
                        <p className="high">High: {high}°{unit}</p>
                        <p className="low">Low: {low}°{unit}</p>
                        <p className="wind-speed">Wind: {windSpeed} mph</p>
                        <p className="wind-direction">Wind Direction: {windDirection}°</p>
                        <p className="humidity">Humidity: {humidity}%</p>
                    </div>
                </div>
            </div>
    </>
    );
}

export default WeatherSummary;
