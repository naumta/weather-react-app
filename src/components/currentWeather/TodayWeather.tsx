import axios, { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';
import { TodayWeatherCard } from '../currentWeatherCard/TodayWeatherCard';
import { ICurrentWeather } from './ICurrentWeather';

export const TodayWeather = () => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = `4454b11a288b8e0044e9fec3ac5cde52`;
    const {city} = useContext(Context);
    const[todayWeather, setTodayWeather] = useState<ICurrentWeather | any>();
    const [error, setError] = useState("");

    const getTodayWeather = async () => {
        try {
            setError("");
            const res = await axios.get<ICurrentWeather>(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
                setTodayWeather(res.data);
                console.log(res.data);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setError(error.message);
        }
    }

    useEffect(() => {
        getTodayWeather();
    },[city]);

    return (
        <div>
        {todayWeather
            ?
            <TodayWeatherCard todayWeather={todayWeather} /> 
            :
            <div className='p-4 fs-2 text-danger' 
                style={{fontWeight:"bold"}}>{error}</div> 
        }
        </div>
    )
}
