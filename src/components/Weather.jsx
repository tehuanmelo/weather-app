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

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='search' />
            <img src={search_icon} alt="" />
        </div>
    </div>
  )
}

export default Weather