import React, { useEffect, useState } from 'react';
import { getNowcast } from '../../services/WeatherService';
import './WeatherWidget.scss'

const WeatherWidget = ({city}) => {

  const [ weather, setWeather ] = useState([])

  useEffect(() => {
		getNowcast(city)
			.then(result => {
				return result.forecast
			})
			.then(forecast => {
				setWeather(forecast)
			})
			.catch(err => console.error(err))
	}, [city])
    

  return (
    <div className='weather-card'>      
      <p>{weather[0]?.symbolPhrase}</p>
      <p>Temp: {weather[0]?.temperature}º</p>
			<p>Cloudiness: {weather[0]?.cloudiness}</p>
			<p>Rain probability: {weather[0]?.precipProb}%</p>
    </div>
  );
};

export default WeatherWidget;