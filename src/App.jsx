import { useState, useEffect } from 'react'
import './App.css'

// key="50d464538c244551b7d230839261005";


function App() {
  const [tempF, setTempF] = useState(null);

  async function getWeather () {
    const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=50d464538c244551b7d230839261005&q=London&days=1&aqi=no&alerts=no"
      );
    const weather = await response.json();

    const tempC = weather.current?.temp_c;
    const tempFar = weather.current?.temp_f;

    setTempF(tempFar);
  }

  getWeather();


  return (
    <>
    <p>{tempF}</p>
    </>
  )
}

export default App
