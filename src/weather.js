import React from 'react';
import './App.css'

const Weather = (props) => {

    let condition = "";
    let poloska = "";

  if(props.description) {condition = props.description.replace(/\s+/g, '');}else{condition = ""}
  if(props.description) {poloska = "poloska"}else{poloska=""}
    return(
        <div className="weather">
            {props.city&&props.country && <p>  Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature} °C</p>}
            {props.humidity && <p> Humidity: {props.humidity}%</p>}
            {props.description && <p>Condition: {props.description}</p>}
            {props.error && <h2>{props.error}</h2>}
            <div className={condition}> </div>
            <div className={poloska}> </div>
            <div className="blockForecast">
                <div className="oneOf">
                    {props.temp1 && <h5>9 hours</h5>}
                    {props.temp1 && <h6>{props.temp1} °C</h6>}
                    {props.humidity1 && <h6> {props.humidity1}%</h6>}
                    {props.main1 && <h6>{props.main1}</h6>}
                </div>
                <div className="oneOf">
                    {props.temp2 && <h5>24 hours</h5>}
                    {props.temp2 && <h6>{props.temp2} °C</h6>}
                    {props.humidity2 && <h6> {props.humidity2}%</h6>}
                    {props.main2 && <h6>{props.main2}</h6>}
                </div>
                <div className="oneOf">
                    {props.temp3 && <h5>48 hours</h5>}
                    {props.temp3 && <h6>{props.temp3} °C</h6>}
                    {props.humidity3 && <h6> {props.humidity3}%</h6>}
                    {props.main3 && <h6>{props.main3}</h6>}
                </div>
                <div className="oneOf">
                    {props.temp4 && <h5>72 hours</h5>}
                    {props.temp4 && <h6>{props.temp4} °C</h6>}
                    {props.humidity4 && <h6> {props.humidity4}%</h6>}
                    {props.main4 && <h6>{props.main4}</h6>}
                </div>
                <div className="oneOf">
                    {props.temp5 && <h5>96 hours</h5>}
                    {props.temp5 && <h6>{props.temp5} °C</h6>}
                    {props.humidity5 && <h6> {props.humidity5}%</h6>}
                    {props.main5 && <h6>{props.main5}</h6>}
                </div>
            </div>
        </div>
    )
} ;

export default Weather;