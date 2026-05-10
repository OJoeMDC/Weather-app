import { useState, useEffect } from 'react'
import './App.css'

// key="50d464538c244551b7d230839261005";

function App() {

  async function getWeather () {
    const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=50d464538c244551b7d230839261005&q=London&days=1&aqi=no&alerts=no"
      );
    const weather = await response.json();

    const tempC = weather.current?.temp_c;
    console.log(tempC);
  }

  getWeather();


  return (
    <>

    </>
  )
}

export default App
