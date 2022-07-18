import React from 'react';
import './App.css';
import { TodayWeather } from './components/currentWeather/TodayWeather';
import { FiveDays } from './components/fiveDaysWeather/FiveDays';

function App() {
  return (
    <div className="App">
      <TodayWeather />
      <FiveDays />
    </div>
  );
}

export default App;
