import React, {useState, useEffect} from "react";
import "dotenv/config.js";
import Axios from "axios";
import WeatherCard from "./WeatherCard"

const WeatherContainer = () => {
    const [currentWeather, setCurrentWeather] = useState([]);
    const weatherData = currentWeather;
    useEffect(() => {
        Axios.get (
            "https://api.openweathermap.org/data/2.5/onecall?lat=25.276987&lon=55.296249&exclude=minutely,hourly&units=metric&appid=" +
             process.env.API_KEY,
        ).then((response) => { 
            const weatherData = response.data.daily.map(item => {
              const date = new Date(item.dt * 1000).getDay()
              const days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun.",];
              const currentDay = () => {
                return (date === 0 ? "Sun" : days[date -1])
                };
              const sunrMinutes = () => {
                return (new Date(item.sunrise * 1000).getMinutes() > 9 ?
                new Date(item.sunrise * 1000).getMinutes() : 
                "0" + new Date(item.sunrise * 1000).getMinutes())
              };
              const sunsMinutes = () => {
                return (new Date(item.sunset * 1000).getMinutes() > 9 ? 
                new Date(item.sunset * 1000).getMinutes() :
                "0" + new Date(item.sunset * 1000).getMinutes()
                )
              };
                     
              return {
              day: currentDay(),
              temp: Math.round(item.temp.day),
              hum: item.humidity,
              lowTemp: Math.round(item.temp.min),
              highTemp: Math.round(item.temp.max),
              sunrise:
              new Date(item.sunrise * 1000).getHours() +
              ':' + 
              sunrMinutes(),
            sunset:
              new Date(item.sunset * 1000).getHours() +
              ':' +
              sunsMinutes(),
                  icon: <img className="Card-image" src = {"http://openweathermap.org/img/w/" + item.weather[0].icon + ".png"} />
              }
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
      <div className="container">
         {weatherData.map(weatherItem => {
            return (
              <WeatherCard
                day={weatherItem.day}
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