import React, {useState, useEffect} from "react";
import "dotenv/config.js";
import Axios from "axios";
import WeatherCard from "./WeatherCard"


const WeatherContainer = () => {
    const [currentWeather, setCurrentWeather] = useState([]);
    const weatherData = currentWeather;
    useEffect(() => {
        Axios.get (
            "http://api.openweathermap.org/data/2.5/forecast?q=dubai&units=metric&APPID=" +
             process.env.API_KEY,
        ).then((response) => {
            const weatherData = response.data.list.map(item => {
              const date = new Date(item.dt_txt).getDay()
              console.log(new Date(item.dt_txt).getDate());
              const days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
              const day = days[date - 1];
              return {
              day: day ,
              temp: Math.round(item.main.temp),
              hum: item.main.humidity,
              lowTemp: Math.round(item.main.temp_min),
              highTemp: Math.round(item.main.temp_max),
              sunrise:
              new Date(response.data.city.sunrise * 1000).getHours() +
              ':' +
              new Date(response.data.city.sunrise * 1000).getMinutes(),
            sunset:
              new Date(response.data.city.sunset * 1000).getHours() +
              ':' +
              new Date(response.data.city.sunset * 1000).getMinutes(),
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