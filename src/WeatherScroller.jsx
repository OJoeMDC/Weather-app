import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import './WeatherScroller.css'

function WeatherScroller({weather}) {


        return(
            <div className='weatherScroller'>
                {/* <h2>{weather.location.name}</h2> */}
                <div className='cardDisplay'>
                    {weather.forecast.forecastday.map((dayData, index) => (
                    <WeatherCard 
                    key={dayData.date}
                    weather={weather}
                    day={index}/>
                    ))}
                </div>
            </div>
        );
}

export default WeatherScroller;