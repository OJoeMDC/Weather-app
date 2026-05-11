import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import './WeatherScroller.css'

function WeatherScroller({weather}) {
    return(
        <main>
            <WeatherCard weather={weather}/>
        </main>
    );
}

export default WeatherScroller;