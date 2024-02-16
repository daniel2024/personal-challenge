import css from './CardWeatherDetails.module.css'
import { Weather } from '../../interfaces/Weather';
import classnames from 'classnames';
import {weatherCodes}  from '../../constants/weatherCode';
import { useMemo } from 'react';


function formatDate(date : Date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateTime = new Date(date); 

  const day = dateTime.getDate();
  const monthName = months[dateTime.getMonth()];

  return `${day} ${monthName}`;
}

function getDayOfWeek(date : Date) {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dateTime = new Date(date); 
  const dayIndex = dateTime.getDay();
  return daysOfWeek[dayIndex];
}


interface CardWeatherDetailsProps{
  weatherData: Weather
}

const CardWeatherDetails = ({weatherData}:CardWeatherDetailsProps) => {

  const weatherCode = useMemo( () => 
        weatherCodes.find(weather => weather.codes.some( code => code === weatherData.weather[0].id) )
  , [weatherData]);

  return (
    <div className={classnames(css.cardContainer, 'py-3 px-4 flex flex-col ')}>
      <h5>{getDayOfWeek(weatherData.dt_txt)}</h5>
      <label>{formatDate(weatherData.dt_txt) }</label>
      <h3>{Math.floor(weatherData.main.temp)}°</h3>
      <img src={weatherCode?.icon}  />

      <div className='flex flex-row gap-3'>
        <label>Min: {Math.floor(weatherData.main.temp_min)}°</label>
        <label>Max: {Math.floor(weatherData.main.temp_max)}°</label>
      </div>
    </div>
  )
}

export default CardWeatherDetails;