import moment from 'moment'
import { IFiveDaysWeather } from '../fiveDaysWeather/IFiveDaysWeather'

export const WeatherCards = ({fiveDaysWeather}:{fiveDaysWeather:IFiveDaysWeather["list"]}) => {
    return (

    <div className="row g-4 m-3">
        {
        fiveDaysWeather.map((item, index) =>
            <div className="col" key={index}>
                <div className="card h-100 shadow p-2 mb-1 bg-light rounded">
                    <p className="fs-4 text-success fw-bold" >{moment(item.dt * 1000).format("MMMM DD")}</p>
                    <p className="fs-4 text-success fw-bold" >{moment(item.dt * 1000).format("dddd")}</p>
                    <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} style={{width: 170}} className="mx-auto" alt="icon" />
                    
                    <div className="card-body p-1">
                        <h5 className="card-text fs-3 text-success">{item.weather[0].description}</h5>
                        <h1 className="card-title text-warning mb-3">
                            {item.main.temp.toFixed(0)} °C</h1>
                        <p className="card-text text-primary text-start ps-4"><span className='fw-bold'>Feels like:</span> {item.main.feels_like.toFixed(0)} °C</p>
                        <p className="card-text text-primary text-start ps-4"><span className='fw-bold'>Wind:</span> {item.wind.speed.toFixed(0)} km/h</p>
                        <p className="card-text text-primary text-start ps-4"><span className='fw-bold'>Humidity:</span> {item.main.humidity} %</p>
                    </div>
                </div>
            </div>)
        }
    </div>
    )
}
