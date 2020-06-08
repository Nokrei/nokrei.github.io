import React from "react";

const WeatherCard = (props) => {
    return(
        <div className="Card">
          <div><h1>{props.day}</h1></div>
          <div >{props.icon}</div>
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