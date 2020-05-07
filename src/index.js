import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "dotenv/config.js"
import Axios from "axios";


Axios.get("http://api.openweathermap.org/data/2.5/forecast?q=dubai&units=metric&APPID=" + process.env.API_KEY)
.then((response => {
  const weatherData = {
   temp: response.data.list[0].main.temp,
   hum: response.data.list[0].main.humidity,
   lowTemp: response.data.list[0].main.temp_min,
   highTemp: response.data.list[0].main.temp_max,
   sunrise: new Date(response.data.city.sunrise* 1000).getHours() + ":" + new Date(response.data.city.sunrise* 1000).getMinutes(),
   sunset: new Date(response.data.city.sunset* 1000).getHours() + ":" + new Date(response.data.city.sunset* 1000).getMinutes()
  }
  console.log("The current temperature is: " + weatherData.temp);
}));

let pos;

function getLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
};

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  pos = [lat, lon];
  console.log(pos);
}

getLocation()




  ReactDOM.render(
   <App />,
    document.getElementById("root")
  );

