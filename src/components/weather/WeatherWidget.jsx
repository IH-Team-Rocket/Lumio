import React, { useEffect, useState } from 'react';
import { getNowcast } from '../../services/WeatherService';

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
    <div>      
      <p>{weather[0]?.symbolPhrase}</p>
      <p>Temp: {weather[0]?.temperature}º</p>
			<p>Cloudiness: {weather[0]?.cloudiness}</p>
			<p>Rain probability: {weather[0]?.precipProb}%</p>
    </div>
  );
};

export default WeatherWidget;