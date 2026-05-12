import { useState, useEffect } from 'react'
import './App.css'
import WeatherScroller from './WeatherScroller'

// key="50d464538c244551b7d230839261005";



function App() {
const [error, setError] = useState("");
const [selectedCity, setSelectedCity] = useState("London");

  const [tempF, setTempF] = useState(null);
  const [weather, setWeather] = useState(null);

  async function getWeather () {
    try {
      const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=50d464538c244551b7d230839261005&q=${selectedCity}&days=1&aqi=no&alerts=n`
        );
      const weatherData = await response.json();

      const tempC = weatherData.current?.temp_c;
      const tempFar = weatherData.current?.temp_f;

      setTempF(tempFar);
      setWeather(weatherData);

      console.log(weatherData);


    } catch (err) {

      setError(err.message);
    }
  }


  useEffect(() => {
      getWeather();
      }, []);
    

  return (
    <>
    <main>
      {weather && <WeatherScroller weather={weather} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>}
    </main>
    </>
  )
}

export default App
