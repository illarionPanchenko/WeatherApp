import React from 'react';
import './App.css'

const Weather = (props) => {

    let dayOn = "";
    let dayOn2 = "";
    let dayOn3 = "";
    let dayOn4 = "";


   if(props.day){
       if(props.day==="Mon"){
           dayOn = "Tuesday";
           dayOn2 = "Wednesday";
           dayOn3 = "Thursday";
           dayOn4 = "Friday";
       }else if(props.day==="Tue"){
           dayOn = "Wednesday";
           dayOn2 = "Thursday";
           dayOn3 = "Friday";
           dayOn4 = "Saturday"
       }else if(props.day==="Wed"){
           dayOn = "Thursday";
           dayOn2 = "Friday";
           dayOn3 = "Saturday";
           dayOn4 = "Sunday"
       }else if(props.day==="Thu"){
           dayOn = 'Friday';
           dayOn2 = "Saturday";
           dayOn3 = "Sunday";
           dayOn4 = "Monday"
       }else if(props.day==="Fri"){
           dayOn = "Saturday";
           dayOn2 = "Sunday";
           dayOn3 = "Monday";
           dayOn4 = "Tuesday"
       }else if(props.day==="Sat"){
           dayOn = "Sunday";
           dayOn2 = "Monday";
           dayOn3 = "Tuesday";
           dayOn4 = "Wednesday"
       }else{
           dayOn = "Monday";
           dayOn2 = "Tuesday";
           dayOn3 = "Wednesday";
           dayOn4 = "Thursday";
       }
   }

    let condition = "";
    let poloska = "";

  if(props.description) {condition = props.description.replace(/\s+/g, '');}else{condition = ""}
  if(props.description) {poloska = "poloska"}else{poloska=""}
    return(
        <div className="weather">
            <div className="wrapper">
            <div className="wrapper1">
            {props.city&&props.country && <p>  Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature} °C</p>}
            {props.humidity && <p> Humidity: {props.humidity}%</p>}
            {props.description && <p>Condition: {props.description}</p>}
            {props.error && <h2>{props.error}</h2>}
        </div>
            <div className="wrapper2">
                <div className={condition}> </div>
        </div>
            </div>
            <div className={poloska}> </div>
            <div className="blockForecast">
                <div className="oneOf">
                    {props.description && <h5>Tonight</h5>}
                    {props.temp1 && <h6>{props.temp1} °C</h6>}
                    {props.humidity1 && <h6> {props.humidity1}%</h6>}
                    {props.main1 && <h6>{props.main1}</h6>}
                </div>
                <div className="oneOf">
                    {props.temp2 && <h5>{dayOn}</h5>}
                    {props.temp2 && <h6>{props.temp2} °C</h6>}
                    {props.humidity2 && <h6> {props.humidity2}%</h6>}
                    {props.main2 && <h6>{props.main2}</h6>}
                </div>
                <div className="oneOf">
                    {props.temp3 && <h5>{dayOn2}</h5>}
                    {props.temp3 && <h6>{props.temp3} °C</h6>}
                    {props.humidity3 && <h6> {props.humidity3}%</h6>}
                    {props.main3 && <h6>{props.main3}</h6>}
                </div>
                <div className="oneOf">
                    {props.temp4 && <h5>{dayOn3}</h5>}
                    {props.temp4 && <h6>{props.temp4} °C</h6>}
                    {props.humidity4 && <h6> {props.humidity4}%</h6>}
                    {props.main4 && <h6>{props.main4}</h6>}
                </div>
                <div className="oneOf">
                    {props.temp5 && <h5>{dayOn4}</h5>}
                    {props.temp5 && <h6>{props.temp5} °C</h6>}
                    {props.humidity5 && <h6> {props.humidity5}%</h6>}
                    {props.main5 && <h6>{props.main5}</h6>}
                </div>
            </div>

        </div>
    )
} ;

export default Weather;