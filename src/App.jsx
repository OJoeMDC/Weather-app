import { useState, useEffect } from 'react'
import './App.css'
import WeatherScroller from './WeatherScroller'
import SearchBar from './SearchBar';



function App() {
const [error, setError] = useState("");
const [selectedCity, setSelectedCity] = useState("London");
const [inputValue, setInputValue] = useState("London");

  const [tempF, setTempF] = useState(null);
  const [weather, setWeather] = useState(null);

  async function getWeather () {
    try {
      const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=50d464538c244551b7d230839261005&q=${selectedCity}&days=7&aqi=no&alerts=no`
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
      }, [selectedCity]);
    

  return (
    <>
    <main className="App">
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} setSelectedCity={setSelectedCity} />
        {weather && <WeatherScroller weather={weather} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>}
    </main>
    </>
  )
}

export default App
