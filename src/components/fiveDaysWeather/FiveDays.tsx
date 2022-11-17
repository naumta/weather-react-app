import axios, { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';
import { WeatherCards } from '../fiveDaysCard/WeatherCards';
import { IFiveDaysWeather } from './IFiveDaysWeather';

export const FiveDays = () => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?`;
    const API_KEY = `4454b11a288b8e0044e9fec3ac5cde52`;
    const {city} = useContext(Context);
    const[fiveDaysWeather, setFiveDaysWeather] = useState<IFiveDaysWeather["list"]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getFiveDaysWeather = async () => {
            try {
                setLoading(true);
                const res = await axios.get<IFiveDaysWeather>(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
                    setFiveDaysWeather(res.data.list.filter((reading: { dt_txt:string }) => reading.dt_txt.includes("15:00:00")));
                    setLoading(false);
            } catch(e: unknown) {
                const err = e as AxiosError;
                setLoading(false);
                setError(err.message);
        }
    }
        getFiveDaysWeather();
    },[city])

    return (
        <div>
            <WeatherCards fiveDaysWeather={fiveDaysWeather} /> 

            {loading && 
                (<div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span>
                </div>)}
            
            {error && (<div className='p-4 fs-2 text-danger' 
                style={{fontWeight:"bold"}}>{error}</div>)}
        </div>
    )
}






