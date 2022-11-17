import moment from 'moment';
import { ICurrentWeather } from '../currentWeather/ICurrentWeather'

export const TodayWeatherCard = ({todayWeather}:{todayWeather:ICurrentWeather}) => {
    return (
        <div>
            <h1 className='mt-4 text-primary'>Current Weather</h1>
            <h3 className='mt-3 text-success'>{moment().format("dddd LL")}</h3>
            <h3 className='mt-3 text-info fw-bolder'>{todayWeather.name}</h3>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column'>
                        <div className='m-4'>
                            <img src={`http://openweathermap.org/img/w/${todayWeather?.weather[0]?.icon}.png`} style={{ width: 260}} className="pe-3" alt="icon" />
                            <p className='text-success fw-bold fs-4'>{todayWeather?.weather[0]?.description}</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>

                    <div className='d-flex flex-column text-start'>
                        <div>
                            <h1 className='text-warning fw-bold mb-2 p-3'>{todayWeather?.main?.temp.toFixed(0)} °C</h1>
                        </div>
                        <div>
                            <p className="text-primary p-3 fs-4"><span className='text-success fw-bold'>Feels like:</span> {todayWeather.main.feels_like.toFixed(0)} °C</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center text-primary m-4 fs-4'>
                        <div className='border border-warning border-end-0'>
                            <p className="p-3"><span className='text-success fw-bold'>Wind:</span> {todayWeather.wind.speed.toFixed(0)} km/h</p>
                        </div>
                        <div className='border border-warning border-end-0'>
                            <p className='p-3'><span className='text-success fw-bold'>Humidity:</span> {todayWeather.main.humidity} %</p>
                        </div>
                        <div className='border border-warning border-end-0'>
                            <p className=' p-3'><span className='text-success fw-bold'>Sunrise:</span> {moment.utc((todayWeather.sys.sunrise * 1000) + (todayWeather.timezone * 1000)).format("HH:mm A")}</p>
                        </div>
                        <div className='border border-warning'>
                            <p className=' p-3'><span className='text-success fw-bold'>Sunset:</span> {moment.utc((todayWeather.sys.sunset * 1000) + (todayWeather.timezone * 1000)).format("HH:mm A")}</p>
                        </div>
                </div>
                        
                    
                
        </div>
        
    )
}
