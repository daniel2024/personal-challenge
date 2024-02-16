import {render, screen} from '@testing-library/react'
import CardWeatherDetails from '.';
import { Weather } from '../../interfaces/Weather';
import renderer from 'react-test-renderer';



const weatherDataMock: Weather = {
    "dt": 1708138800,
    "main": {
        "temp": 23.98,
        "feels_like": 24.29,
        "temp_min": 23.41,
        "temp_max": 23.98,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1011,
        "humidity": 71,
        "temp_kf": 0.57
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "cielo claro",
            "icon": "01n"
        }
    ],
    "clouds": {
        "all": 0
    },
    "wind": {
        "speed": 4.63,
        "deg": 51,
        "gust": 9.77
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
        "pod": "n"
    },
    "dt_txt": new Date()
};



describe("Card Weather Details",()=>{
    it('Correct Render',()=>{
        const CardWeather = renderer.create(<CardWeatherDetails weatherData={weatherDataMock}/>).toJSON();
        expect(CardWeather).toMatchSnapshot();
        
    })
});