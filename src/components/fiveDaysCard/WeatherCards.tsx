import React from 'react'
import { IFiveDaysWeather } from '../fiveDaysWeather/IFiveDaysWeather'

export const WeatherCards = ({fiveDaysWeather}:{fiveDaysWeather:IFiveDaysWeather["list"]}) => {

    return (
    <div className="row row-cols-1 row-cols-md-4 g-4 m-3">
        {fiveDaysWeather.map((item, index) => 
        
            <div className="col" key={index}>
                <div className="card h-100">
                <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} className="card-img-top" alt="icon" />
                    <div className="card-body">
                        <h5 className="card-text">{item.weather[0].description}</h5>
                        <h1 className="card-title">
                            {item.main.temp.toFixed(0)} °C</h1>
                        <p className="card-text">Feels like: {item.main.feels_like.toFixed(0)} °C</p>
                        <p className="card-text">Wind: {item.wind.speed.toFixed(0)} km/h</p>
                    </div>
                    
                </div>
            </div>
        )}
    </div>
    )
}
