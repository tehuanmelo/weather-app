import React from 'react'
import './Weather.css'

import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const api_key = "d0b5658fd2330eda3003dc681033088e"

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='search' />
            <img src={search_icon} alt="" />
        </div>
        <img src={clear_icon} alt="" className='weather-icon'/>
        <p className='temperature'>16°C</p>
        <p className='location'>London</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                    <p>91%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                    <p>30km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather