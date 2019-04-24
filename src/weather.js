import React from 'react';
import './App.css'

const Weather = (props) => {

    let condition = "";

  if(props.description) {condition = props.description.replace(/\s+/g, '');}else{condition = ""}
    return(
        <div className="weather">
            {props.city&&props.country && <p>  Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature} °C</p>}
            {props.humidity && <p> Humidity: {props.humidity}%</p>}
            {props.description && <p>Condition: {props.description}</p>}
            {props.error && <h2>{props.error}</h2>}
            <div className={condition}> </div>
        </div>
    )
} ;

export default Weather;