import { useEffect, useMemo, useState } from 'react'
import './App.css'
import useWeather from './services/useWeather';
import CardWeatherDetails from './components/CardWeatherDetails';
import { Weather } from './interfaces/Weather';
import Selector from './components/SelectInput';
import { cities } from './constants/Cities';



function App() {
  const [dataWeathers, setDataWeathers] = useState<Weather[]>([]);
  const [citySelected, setCitySelected] = useState(cities[0])

  const {getWeatherByCity} = useWeather();

  useEffect(() => {
    const getWeather =  async()=>{
    const weather = await  getWeatherByCity(citySelected);  
    setDataWeathers(weather)
  }
    getWeather();
  }, [citySelected])
  
  const listCities = useMemo(() => cities.map(city =>({label: city.name , value:city})), [])

  return (
    <>
      <div className='flex flex-col gap-16'>
      <Selector onChange={setCitySelected} list={listCities} defaultValue={citySelected.name}/>
      <div className='flex flex-row gap-4'>
      {dataWeathers.map(dataWeather =>{
        return <CardWeatherDetails key={dataWeather.dt} weatherData={dataWeather}/>
      })}
      </div>
        
      </div>

    </>
  )
}

export default App
