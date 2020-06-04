import React from "react";

const numOfDay = new Date().getDay();
const days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
const day = days[numOfDay - 1];
const WeatherCard = (props) => {
    return(
        <div className="Card">
          <div><h1>{day}</h1></div>
          
          <div>Current: {props.temp + '\u00b0'}</div>
          <div>Humidity: {props.humidity + '\u0025' }  </div>
          <div>Min: {props.low + '\u00b0'} </div>
          <div>Max: {props.high + '\u00b0'} </div>
          <div>Sunrise: {props.sunrise} </div>
          <div>Sunset: {props.sunset} </div>
      
        </div>
    )
}


export default WeatherCard