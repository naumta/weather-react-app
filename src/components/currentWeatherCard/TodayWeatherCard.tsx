import moment from 'moment';
import { ICurrentWeather } from '../currentWeather/ICurrentWeather'

export const TodayWeatherCard = ({todayWeather}:{todayWeather:ICurrentWeather}) => {

    return (
        <div>
            <h1 className='mt-3 text-primary'>Current Weather</h1>
            <h3 className='mt-3 text-success'>{moment().format("LL")}</h3>
            <h3 className='mt-3 text-info fw-bolder'>{todayWeather.name}</h3>

            <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column'>
                    <div>
                        <img src={`http://openweathermap.org/img/w/${todayWeather.weather[0].icon}.png`} style={{width: 280}} className="pe-3" alt="icon" />
                    </div>
                    <div>
                        <h5 className="fs-3 text-success">{todayWeather.weather[0].description}</h5>
                    </div>
                </div>

                <div className='d-flex flex-column text-start'>
                    <div className='text-warning mt-5 pt-5 '>
                        <h1 className='fw-bold mb-2 px-3'>{todayWeather.main.temp.toFixed(0)} °C</h1>
                    </div>
                    <div>
                        <p className="text-primary px-3">Feels like: {todayWeather.main.feels_like.toFixed(0)} °C</p>
                    </div>
                    <div>
                        <p className="text-primary px-3">Wind: {todayWeather.wind.speed.toFixed(0)} km/h</p>
                    </div>
                    <div>
                        <p className='text-primary px-3'>Humidity: {todayWeather.main.humidity} %</p>
                    </div>
                    <div>
                        <p className='text-primary px-3'>Sunrise: {moment.utc((todayWeather.sys.sunrise * 1000) + (todayWeather.timezone * 1000)).format("HH:mm A")}</p>
                    </div>
                    <div>
                    <p className='text-primary px-3'>Sunset: {moment.utc((todayWeather.sys.sunset * 1000) + (todayWeather.timezone * 1000)).format("HH:mm A")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
