import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';
import { TodayWeatherCard } from '../currentWeatherCard/TodayWeatherCard';
import { Search } from '../search/Search';
import { Spinner } from '../spinner/Spinner';
import { ICurrentWeather } from './ICurrentWeather';

export const TodayWeather = () => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = `4454b11a288b8e0044e9fec3ac5cde52`;
    const {city} = useContext(Context);
    const[todayWeather, setTodayWeather] = useState<ICurrentWeather>();

    
    useEffect(() => {
        const getTodayWeather = () => {
            axios.get(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`).then(res => {setTodayWeather(res.data);
                    console.log(res.data);
                }).catch(error => {
                    console.log(error);
                });
        }
        getTodayWeather();
    },[API_KEY, city]);

    return (
        <div>
        {todayWeather
            ?
            <TodayWeatherCard todayWeather={todayWeather}/>
            :
            <Spinner />
        }
        </div>
    )
}
