import React, { useEffect, useState } from 'react';
import { getNowcast } from '../../services/WeatherService';

const WeatherWidget = ({city}) => {

  const [ weather, setWeather ] = useState([])

  /* const [ contract, setContract ] = useState()
  const [ options, setOptions ] = useState([])
	

  useEffect(() => {
    getCurrentUser()
      .then(user => {
        getContracts(user)
          .then(contracts => {
						setContract(contracts[0].location.city)
            return contracts.map(contract => {
              return {
                value: contract.location?.city,
                  name: `${contract.location.street}, ${contract.location.streetNumber}`
                }
            })
          })
          .then((e) => {
            setOptions(e)
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }, [])

	useEffect(() => {
		getNowcast(contract)
			.then(result => {
				return result.forecast
			})
			.then(forecast => {
				console.log(forecast);
				setWeather(forecast)
			})
			.catch(err => console.error(err))
	}, [contract])

  const handleChange = event => {
    console.log(event.target.value);
    setContract(event.target.value);
  };
 */
  useEffect(() => {
		getNowcast(city)
			.then(result => {
				return result.forecast
			})
			.then(forecast => {
				console.log(forecast);
				setWeather(forecast)
			})
			.catch(err => console.error(err))
	}, [city])
    

  return (
    <div>
      {/* <select name='sellingUserContract'
                    onChange={handleChange}
                    id="select-contract"
                    >
        {options?.map(option => {
          return <option key={option.value} value={option.value}> {option.name}</option>
        })}
      </select> */}
      
      <p>{weather[0]?.symbolPhrase}</p>
      <p>Temp: {weather[0]?.temperature}º</p>
			<p>Cloudiness: {weather[0]?.cloudiness}</p>
			<p>Rain probability: {weather[0]?.precipProb}%</p>


    </div>
  );
};

export default WeatherWidget;