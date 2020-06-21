import React from 'react';

const WeatherCard = (props) => {
  return (
    <div className="Card">
      
        <div className="Card--title">
          <h1>{props.day}</h1>
          <p>{props.fullDate}</p>
        </div>
        <div className="Card--details">
        <div className="Card--details-big">
        <p>{props.temp + '\u00b0'}</p>
          <div>{props.icon}</div>
          
        </div>
      

      <div className="Card--details-small">
        
        <p>Temp Min: {props.low + '\u00b0'} </p>
        <p>Temp Max: {props.high + '\u00b0'} </p>
        <p>Sunrise at: {props.sunrise} </p>
        <p>Sunset at: {props.sunset} </p>
        <p>Humidity: {props.humidity + '\u0025'} </p>
      </div>
        </div>
       
    </div>
  );
};

export default WeatherCard;
