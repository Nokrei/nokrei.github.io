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
            const weatherData = response.data.list.map(item => {
              temp = Math.Round(item.main.temp),
              hum = item.main.humidity,
              lowTemp = Math.round(item.main.temp_min),
              highTemp = Math.round(item.main.temp_max),
                sunrise =
                  new Date(item.city.sunrise * 1000).getHours() +
                  ':' +
                  new Date(item.city.sunrise * 1000).getMinutes(),
                sunset =
                  new Date(item.city.sunset * 1000).getHours() +
                  ':' +
                  new Date(item.city.sunset * 1000).getMinutes(),
                  icon = <img className="Card-image" src = {"http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png"} />
          })
            
           /* {
                temp: Math.round(response.data.list[0].main.temp) ,
                hum: response.data.list[0].main.humidity,
                lowTemp: Math.round(response.data.list[0].main.temp_min),
                highTemp: Math.round(response.data.list[0].main.temp_max),
                sunrise:
                  new Date(response.data.city.sunrise * 1000).getHours() +
                  ':' +
                  new Date(response.data.city.sunrise * 1000).getMinutes(),
                sunset:
                  new Date(response.data.city.sunset * 1000).getHours() +
                  ':' +
                  new Date(response.data.city.sunset * 1000).getMinutes(),
                  icon: <img className="Card-image" src = {"http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png"} />
            };
*/
            setCurrentWeather(weatherData);
        });
    }, []);
    return (
      <div>
         {weatherData.map(weatherItem => {
  return (
    <WeatherCard
      temp={weatherItem.temp}
      humidity={weatherItem.hum}
      low={weatherItem.lowTemp}
      high={weatherItem.highTemp}
      sunrise={weatherItem.sunrise}
      sunset={weatherItem.sunset}
      icon={weatherItem.icon} 
    />
  )
})}
        
      </div>
    );
};

export default WeatherContainer;