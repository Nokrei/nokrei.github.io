import React, {useState, useEffect} from "react";
import "dotenv/config.js";
import Axios from "axios";
import WeatherCard from "./WeatherCard"


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
        <WeatherCard
          temp={currentWeather.temp}
          humidity={currentWeather.hum}
          low={currentWeather.lowTemp}
          high={currentWeather.highTemp}
          sunrise={currentWeather.sunrise}
          sunset={currentWeather.sunset}
        />
      </div>
    );
};

export default WeatherContainer;