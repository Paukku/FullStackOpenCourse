import axios from 'axios'
import { useState, useEffect } from "react";

const Weather = ({capit}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [countryWeather, setCountryWeather] = useState()

    useEffect (() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capit}&appid=${api_key}
        `).then(response => { 
            setCountryWeather(response.data)            
        } )
      }, [capit, api_key])
      

return(
    <div>
        <h1>Weather in {capit}</h1>
        {countryWeather ? 
        <div>
            <p>Tempature: {Math.round(countryWeather.main.temp - 273.15)} Celcius</p>
            <img src={'http://openweathermap.org/img/wn/' + countryWeather.weather[0].icon + '@2x.png'} alt={countryWeather.weather[0].description} />
            <p>Wind: {countryWeather.wind.speed} m/s</p>
        </div>     
        : null }
       
            
    </div>
)
}

export default Weather