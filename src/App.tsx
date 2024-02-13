import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeather from './services/useWeather';

const buenosAires = {
    code: '',
    name: 'Buenos Aires',
    latitude:-34.61315,
    longitude: -58.37723
}

function App() {
  const [count, setCount] = useState(0);
  const [dataWeather, setDataWeather] = useState(null);
  const {getWeatherByCity} = useWeather();


  useEffect(() => {
    const getWeather =  async()=>{
  
    const weather = await  getWeatherByCity(buenosAires);  
    setDataWeather(weather)
  }

    getWeather();
  }, [])
  


  return (
    <>
      <div className='flex flex-col aling'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
          <pre>{JSON.stringify(dataWeather, null ,2)}</pre>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
