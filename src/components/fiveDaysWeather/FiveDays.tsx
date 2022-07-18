import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { WeatherCards } from '../fiveDaysCard/WeatherCards';
import { IFiveDaysWeather } from './IFiveDaysWeather';

export const FiveDays = () => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?`;
    const API_KEY = `4454b11a288b8e0044e9fec3ac5cde52`;
    const city = "Minsk";
    const[fiveDaysWeather, setFiveDaysWeather] = useState<IFiveDaysWeather["list"]>([]);
    
    useEffect(() => {
        getFiveDaysWeather();
    },[])

    const getFiveDaysWeather = () => {
        axios.get(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`).then(res => {
            setFiveDaysWeather(res.data.list.filter((reading: { dt_txt:string }) => reading.dt_txt.includes("15:00:00")));
        });
    }

    return (
        <div>
            <WeatherCards fiveDaysWeather={fiveDaysWeather}/>
        </div>
    
    )
}
