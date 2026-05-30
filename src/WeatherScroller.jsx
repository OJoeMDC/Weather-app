import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import './WeatherScroller.css'

function WeatherScroller({weather, selectedCity, setSelectedCity, isFahrenheit, setIsFahrenheit, selectedDay, setSelectedDay}) {


        return(
            <div className='weatherScroller'>
                <div className='cardDisplay'>
                    {weather.forecast.forecastday.map((dayData, index) => (
                    <WeatherCard 
                    key={dayData.date}
                    weather={weather}
                    day={index}
                    isFahrenheit={isFahrenheit}
                    setIsFahrenheit={setIsFahrenheit}
                    setSelectedDay={setSelectedDay}
                    selectedDay={selectedDay}
                    />
                    ))}
                </div>
            </div>
        );
}

export default WeatherScroller;