import React from 'react';
import './App.css'

const Weather = (props) => {
    return(
        <div className="weather">
            {props.city&&props.country && <p>  Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature} °C</p>}
            {props.humidity && <p> Humidity: {props.humidity}%</p>}
            {props.description && <p>Condition: {props.description}</p>}
            {props.error && <h2>{props.error}</h2>}
        </div>
    )
} ;

export default Weather;