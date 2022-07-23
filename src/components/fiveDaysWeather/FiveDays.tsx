import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';
import { WeatherCards } from '../fiveDaysCard/WeatherCards';
import { Spinner } from '../spinner/Spinner';
import { IFiveDaysWeather } from './IFiveDaysWeather';

export const FiveDays = () => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?`;
    const API_KEY = `4454b11a288b8e0044e9fec3ac5cde52`;
    const {city} = useContext(Context);
    const[fiveDaysWeather, setFiveDaysWeather] = useState<IFiveDaysWeather["list"]>([]);

    useEffect(() => {
        const getFiveDaysWeather = () => {
            axios.get(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`).then(res => {
                setFiveDaysWeather(res.data.list.filter((reading: { dt_txt:string }) => reading.dt_txt.includes("15:00:00")));
            }).catch(error => {
                console.log(error);
            });
        }
        getFiveDaysWeather();
    },[API_KEY, API_URL, city])

    return (
        <div>
            {fiveDaysWeather.length
            ?
                <WeatherCards fiveDaysWeather={fiveDaysWeather}/>
            :
            <Spinner />
            }
        </div>
    )
}






