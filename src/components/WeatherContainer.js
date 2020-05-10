import React, {useState, useEffect} from "react";
import "dotenv/config.js";
import Axios from "axios";

const WeatherContainer = () => {
    const [currentWeather, setCurrentWeather] = useState({});

    useEffect(() => {
        Axios.get (
            "http://api.openweathermap.org/data/2.5/forecast?q=dubai&units=metric&APPID=" +
             process.env.API_KEY,
        ).then((response) => {
            const weatherData = {
                temp: response.data.list[0].main.temp,
                hum: response.data.list[0].main.humidity,
                lowTemp: response.data.list[0].main.temp_min,
                highTemp: response.data.list[0].main.temp_max,
                sunrise:
                  new Date(response.data.city.sunrise * 1000).getHours() +
                  ':' +
                  new Date(response.data.city.sunrise * 1000).getMinutes(),
                sunset:
                  new Date(response.data.city.sunset * 1000).getHours() +
                  ':' +
                  new Date(response.data.city.sunset * 1000).getMinutes(),
            };

            setCurrentWeather(weatherData);
        });
    }, []);

    return (
        <div>
      <div>Temp: {currentWeather.temp}</div>
      <div>Humidity: {currentWeather.hum}</div>
      <div>Low: {currentWeather.lowTemp}</div>
      <div>High: {currentWeather.highTemp}</div>
      <div>Sunrise: {currentWeather.sunrise}</div>
      <div>Sunset: {currentWeather.sunset}</div>
        </div>
    );
};

export default WeatherContainer;