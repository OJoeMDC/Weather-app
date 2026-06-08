# Weather App

A React weather forecast app that lets you search any city and view current conditions plus a 3-day forecast. Built with React, Vite, and the [WeatherAPI](https://www.weatherapi.com/).

## Features

- **City search** — search any city worldwide
- **Current weather** — temperature, conditions, and location info
- **3-day forecast** — scrollable daily forecast cards
- **Fahrenheit / Celsius toggle** — switch between units
- **Error handling** — friendly messages for invalid cities or API issues

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** CSS (custom)
- **API:** [WeatherAPI.com](https://www.weatherapi.com/) (free tier)
- **Icons:** React Icons

## Project Structure

```
Weather-app/
├── public/                  # Static assets
├── src/
│   ├── App.jsx              # Main app — state, API calls
│   ├── App.css              # Global styles
│   ├── SearchBar.jsx        # City search input
│   ├── SearchBar.css
│   ├── WeatherSummary.jsx   # Current weather display
│   ├── WeatherSummary.css
│   ├── WeatherScroller.jsx  # 3-day forecast cards
│   ├── WeatherScroller.css
│   ├── weatherCard.jsx      # Individual forecast card
│   ├── weatherCard.css
│   ├── main.jsx             # React entry point
│   ├── index.css            # Base/reset styles
│   └── assets/              # Images
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Getting Started

```bash
git clone https://github.com/OJoeMDC/Weather-app.git
cd Weather-app
npm install
npm run dev
```

The dev server will start at `http://localhost:5173`.

## API Key

The app uses a WeatherAPI key embedded in the code. For production use, you should:
1. Sign up at [weatherapi.com](https://www.weatherapi.com/) for a free API key
2. Store it in an environment variable (`VITE_WEATHER_API_KEY`)
3. Reference it via `import.meta.env.VITE_WEATHER_API_KEY`

## About

Built by **Osceola Martin del Campo** as a personal project to practice React, API integration, and responsive UI design.

This project was built with the assistance of **ChatGPT**, which helped with code development, debugging, and project setup.
