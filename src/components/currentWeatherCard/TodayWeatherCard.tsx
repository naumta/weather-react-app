import React from 'react'
import { ICurrentWeather } from '../currentWeather/ICurrentWeather'

export const TodayWeatherCard = ({todayWeather}:any) => {
    return (
        <div>
            <h1>Current Weather</h1>
            
            <div className="row row-cols-1 row-cols-md-4 g-4 m-3">
                
            <div className="col">
                <div className="card h-100">
                <img src={`http://openweathermap.org/img/w/${todayWeather.weather[0].icon}.png`} className="card-img-top" alt="icon" />
                    <div className="card-body">
                        <h5 className="card-text">{todayWeather.weather[0].description}</h5>
                        <h1 className="card-title">
                            {todayWeather.main.temp.toFixed(0)} °C</h1>
                        <p className="card-text">Feels like: {todayWeather.main.feels_like.toFixed(0)} °C</p>
                        <p className="card-text">Wind: {todayWeather.wind.speed.toFixed(0)} km/h</p>
                    </div>
                    
                </div>
            </div>
        
            </div>
        </div>
    )
}
