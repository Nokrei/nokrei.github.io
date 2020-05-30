import React from "react";

const WeatherCard = (props) => {
    return(
        <div>
      <div>{props.temp} </div>
      <div>{props.humidity} </div>
      <div>{props.low} </div>
      <div>{props.high} </div>
      <div>{props.sunrise} </div>
      <div>{props.sunset} </div>
        </div>
    )
}

export default WeatherCard