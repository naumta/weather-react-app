import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TodayWeatherCard } from '../currentWeatherCard/TodayWeatherCard';
import { ICurrentWeather } from './ICurrentWeather';

export const TodayWeather = () => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = `4454b11a288b8e0044e9fec3ac5cde52`;
    const city = "Minsk";
    const[todayWeather, setTodayWeather] = useState<ICurrentWeather>();

    useEffect(() => {
        getTodayWeather();
    },[]);

    const getTodayWeather = () => {
        axios.get(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`).then(res => {
            setTodayWeather(res.data);
            console.log(res.data);
        });
    }

    

    return (
    <div><TodayWeatherCard todayWeather={todayWeather}/></div>
    )
}
