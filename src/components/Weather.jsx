import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'

import clear_icon from '../assets/clear.png'
import clear_night_icon from '../assets/clear_night.png'
import cloud_night_icon from '../assets/cloud_night.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import drizzle_night_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import rain_night_icon from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_icon from '../assets/snow.png'
import snow_night_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import mist_icon from '../assets/mist.png'
import mist_night_icon from '../assets/mist_night.png'


const Weather = () => {

    const [weatherData, setWeatherData] = useState(false)
    const inputRef = useRef()

    const weatherIcon = {
        "01d": clear_icon,
        "01n": clear_night_icon,
        "02d": cloud_icon,
        "02n": cloud_night_icon,
        "03d": cloud_icon,
        "03n": cloud_night_icon,
        "04d": drizzle_icon,
        "04n": drizzle_night_icon,
        "09d": rain_icon,
        "09n": rain_night_icon,
        "010d": rain_icon,
        "010n": rain_night_icon,
        "013d": snow_icon,
        "013n": snow_night_icon,
        "50d": mist_icon,
        "50n": mist_night_icon,
    }

    const search = async (city) => {
        if (city === "") {
            alert("Enter a city name")
            return
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.weather[0].icon)
            setWeatherData({
                humidity: data.main.humidity,
                temperature: Math.round(data.main.temp),
                wind: data.wind.speed,
                location: data.name,
                icon: weatherIcon[data.weather[0].icon] || clear_icon
            })
            
        } catch (error) {
            setWeatherData(false)
            alert("Error fetching data")
        }
    }
    
    console.log(weatherData)
    useEffect(() => {
        search("Abu Dhabi")
    }, [])
    
  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder='search' />
            <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)}/>
        </div>
        {
            weatherData &&
            <><img src={weatherData.icon} alt="" className='weather-icon'/>
            <p className='temperature'>{weatherData.temperature}°C</p>
            <p className='location'>{weatherData.location}</p>
            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="" />
                    <div>
                        <p>{weatherData.humidity} %</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind_icon} alt="" />
                    <div>
                        <p>{weatherData.wind} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div></>
        }
    </div>
  )
}

export default Weather