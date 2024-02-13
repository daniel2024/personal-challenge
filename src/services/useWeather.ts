import { useCallback } from "react";
import axios from 'axios';

const URL_WEATHER = import.meta.env.VITE_URL_OPEN_WEATHER;
const API_KEY_WEATHER =import.meta.env.VITE_API_KEY_OPEN_WEATHER;

//forecast?lat=44.34&lon=10.99&appid=e3ceeb461e4c14844810cdc302fd36db&cnt=5

interface City {
    code: string;
    name: string;
    latitude:number;
    longitude: number;
}



const useWeather = () => {

    const getWeatherByCity = useCallback(
        async (city:City) => {
            const {latitude, longitude} = city;
          const response = await axios.get(`${URL_WEATHER}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHER}&cnt=5&units=metric`);
            
          return response.data.list;
        },
        [],
      )

      return { getWeatherByCity }

};




export default useWeather;
