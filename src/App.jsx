import { useState, useEffect } from 'react'
import './App.css'
import WeatherScroller from './WeatherScroller'
import SearchBar from './SearchBar';
import WeatherSummary from './WeatherSummary';



function App() {
const [error, setError] = useState("");
const [selectedCity, setSelectedCity] = useState("London");
const [inputValue, setInputValue] = useState("London");

const [selectedDay, setSelectedDay] = useState(0);

  const [weather, setWeather] = useState(null);

  const [isFahrenheit, setIsFahrenheit] = useState(true);

  async function getWeather () {
    try {
      if (!selectedCity) {
        setError("Please enter a city name");
        return;
      }

      const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=50d464538c244551b7d230839261005&q=${selectedCity}&days=7&aqi=no&alerts=no`
        );


      const weatherData = await response.json();

      if (weatherData.error) {
        setError("City not found");
        return;
      }

      setWeather(weatherData);
      setSelectedCity(weatherData.location.name);
      setError("");
      setSelectedDay(0); // Reset selected day to 0 when a new city is searched


    } catch (err) {

      setError("Something went wrong. Please try again.", err.message);
    }
  }


  useEffect(() => {
      getWeather();
      }, [selectedCity]);
    

  return (
    <>
    <main className="App">
        <SearchBar 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        setSelectedCity={setSelectedCity} 
        />

        {error && <p className="error">{error}</p>}

        <WeatherSummary 
        weather={weather} 
        selectedCity={selectedCity} 
        isFahrenheit={isFahrenheit} 
        setIsFahrenheit={setIsFahrenheit}
        setSelectedCity={setSelectedCity}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        />

        {weather && <WeatherScroller 
        weather={weather} 
        selectedCity={selectedCity} 
        setSelectedCity={setSelectedCity} 
        isFahrenheit={isFahrenheit}
        setIsFahrenheit={setIsFahrenheit} 
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        />}
    </main>
    </>
  )
}

export default App
