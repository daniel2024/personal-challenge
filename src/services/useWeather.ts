import { useCallback } from "react";
import axios from 'axios';
import { Weather } from "../interfaces/Weather";

const URL_WEATHER = import.meta.env.VITE_URL_OPEN_WEATHER;
const API_KEY_WEATHER =import.meta.env.VITE_API_KEY_OPEN_WEATHER;

function getOneEntryPerDay(data:Weather[]) {
  const oneEntryPerDay:Weather[] = [];

  const addedDays : {[key:string]:boolean}= {};

  data.forEach((entry:Weather) => {
    const dateTime = new Date(entry.dt_txt); 

    const day = dateTime.getDay();
    const month = dateTime.getMonth();
    const dateOnly =  `${day}/${month}`;
    if (!addedDays[dateOnly]) {
      oneEntryPerDay.push(entry);

      addedDays[dateOnly] = true;
    }
  });

  return oneEntryPerDay;
}
export interface City {
    id: string;
    name: string;
    latitude:number;
    longitude: number;
}



const useWeather = () => {

    const getWeatherByCity = useCallback(
        async (city:City) => {
            const {latitude, longitude} = city;
          const response = await axios.get(`${URL_WEATHER}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHER}&units=metric&lang=es`);
            
          return getOneEntryPerDay(response.data.list);
        },
        [],
      )

      return { getWeatherByCity }

};




export default useWeather;
