import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from './components/context/Context'
import { TodayWeather } from './components/currentWeather/TodayWeather'
import { FiveDays } from './components/fiveDaysWeather/FiveDays'

export const AppRoutes = () => {
    const { isAuth } = useContext(Context);
    return (
        isAuth
        ?
        <Routes>
            <Route path='today' element={<TodayWeather/>} />
            <Route path='five-days' element={<FiveDays/>} />
            <Route path='*' element={<TodayWeather/>} />
        </Routes>
        :
        <Routes>
            <Route path='today' element={<TodayWeather/>} />
            <Route path='*' element={<TodayWeather/>} />
        </Routes>
    )
}
