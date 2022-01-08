import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city, countryCode }) => {
  const [forecast, setForecast] = useState('')
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${api_key}&units=imperial`)
      .then(response => {
        setForecast(response.data)
      })
  }, [city, countryCode, api_key])

  if (forecast) {
    return (
      <div>
        <h2>Weather in {city}</h2>
        <div>temperature: {forecast.main.temp} degrees farenheit</div>
        <div>{forecast.weather[0].main}</div>
        <img src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt='' />
        <div>Wind: {forecast.wind.speed} mph</div>
      </div>
    )
  } else {
    return null
  }
}



export default Weather