import { useState, useEffect } from 'react'
import './WeatherCard.css'


function WeatherCard({weather}) {

const [hour, setHour] = useState("0");
const [day, setDay] = useState("0");

const selectedDay = weather?.forecast?.forecastday?.[Number(day)];
const selectedHour = selectedDay?.hour?.[Number(hour)];
const city = weather.location.name;

// if (!selectedDay || !selectedHour) {
//     return null;
// }
const tempF = weather.current.temp_f;


    return (
        <div className='weather-card'>
            {/* <h2>title</h2> */}
            <h3>City: {city}</h3>
            {/* <p>Now: {tempF}</p>
            <p>Hour 0: {hourF}</p> */}

            {selectedDay? (
                <>
                <p>High: {selectedDay.day.maxtemp_f}</p>
                <p>Low: {selectedDay.day.mintemp_f}</p>
                </>
            ) : (
                <p>Invalid Day</p>
            )}

            {selectedHour? (
                <>
                <p>Hour {hour ? hour: 0}: {selectedHour.temp_f}</p>
                </>
            ) : (
                <p>Invalid Hour</p>
            )}

            <label>Day</label>
            <input className='Day' type='number' value={day} onChange={(e) => setDay(e.target.value)} />
            <label>Hour</label>
            <input className='Hour' type='number' value={hour} onChange={(e) => setHour(e.target.value)} />

        </div>

    );
}


export default WeatherCard;