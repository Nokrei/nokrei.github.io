import React, { useState, useEffect } from 'react';
import 'dotenv/config.js';
import Axios from 'axios';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

const WeatherContainer = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const weatherData = currentWeather;

  const [name, setName] = useState('');
  const [city, setCity] = useState('Dubai');
  const [coords, setCoords] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClick = () => {
    setCity(name);
  };

  useEffect(() => {
    Axios.get(
      'https://us1.locationiq.com/v1/search.php?key=83a51c8110956c&q=' +
        city +
        '&format=json',
    ).then((response) => {
      const coords = {
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      };
      setCoords(coords);
    });
  }, [city]);
  console.log(coords);

  useEffect(() => {
    Axios.get(
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
        coords.lat +
        '&lon=' +
        coords.lon +
        '&exclude=minutely,hourly&units=metric&appid=' +
        process.env.API_KEY,
    ).then((response) => {
      const weatherData = response.data.daily.map((item) => {
        const date = new Date(item.dt * 1000).getDay();
        const days = ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];
        const currentDay = () => {
          return date === 0 ? 'Sun.' : days[date - 1];
        };
        const sunrMinutes = () => {
          return new Date(item.sunrise * 1000).getMinutes() > 9
            ? new Date(item.sunrise * 1000).getMinutes()
            : '0' + new Date(item.sunrise * 1000).getMinutes();
        };
        const sunsMinutes = () => {
          return new Date(item.sunset * 1000).getMinutes() > 9
            ? new Date(item.sunset * 1000).getMinutes()
            : '0' + new Date(item.sunset * 1000).getMinutes();
        };

        return {
          day: currentDay(),
          fullDate: new Date(item.dt * 1000).toDateString().slice(4),
          temp: Math.round(item.temp.day),
          hum: item.humidity,
          lowTemp: Math.round(item.temp.min),
          highTemp: Math.round(item.temp.max),
          sunrise:
            new Date(item.sunrise * 1000).getHours() + ':' + sunrMinutes(),
          sunset: new Date(item.sunset * 1000).getHours() + ':' + sunsMinutes(),
          icon: (
            <img
              className="Card-image"
              src={
                'http://openweathermap.org/img/w/' +
                item.weather[0].icon +
                '.png'
              }
            />
          ),
        };
      });

      setCurrentWeather(weatherData);
    });
  }, [coords]);
  console.log(weatherData);

  return (
    <div>
      <SearchBar
        handleChange={handleChange}
        value={name}
        handleClick={handleClick}
        city={city[0].toUpperCase() + city.slice(1)}
      />
      <div className="container">
        {weatherData.map((weatherItem) => {
          return (
            <WeatherCard
              day={weatherItem.day}
              fullDate={weatherItem.fullDate}
              temp={weatherItem.temp}
              humidity={weatherItem.hum}
              low={weatherItem.lowTemp}
              high={weatherItem.highTemp}
              sunrise={weatherItem.sunrise}
              sunset={weatherItem.sunset}
              icon={weatherItem.icon}
            />
          );
        })}
        ,
      </div>
    </div>
  );
};

export default WeatherContainer;
