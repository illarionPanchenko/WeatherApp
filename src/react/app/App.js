import React, {Component} from "react";
import Title from "../title/title.js";
import Form from '../form/form';
import Weather from '../weather/weather';
import "../../style/App.css"


const API_FORECAST = 'e99130a37c62880a1bc1159777950b81';


export default class App extends Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: '',
    humidity: undefined,
    description: "",
    error: undefined,
      lat: 50,
      lng: 30,
      zoom: 3,
      main: null,
    day: undefined,
      temp1: undefined,
      humidity1: undefined,
      main1: null,
      temp2: undefined,
      humidity2: undefined,
      main2: null,
      temp3: undefined,
      humidity3: undefined,
      main3: null,
      temp4: undefined,
      humidity4: undefined,
      main4: null,
      temp5: undefined,
      humidity5: undefined,
      main5: null
};

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    if(country===''){}else{country = ',' + e.target.elements.country.value}
    const api_call = await
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}${country}&appid=${API_FORECAST}`);
    const data = await api_call.json();

    if (city&&data.list) {
        const date = Date();
        const day = [date.charAt(0), date.charAt(1), date.charAt(2)].join("");
        const time = +[date.charAt(16), date.charAt(17)].join("");

        let tonight = null;
        if( time <= 3 ){
          tonight = 7;
        }else if(time<=6){
          tonight = 6;
        }else if(time<=9){
          tonight = 5;
        }else if(time<=12){
          tonight = 4;
        }else if(time<=15){
          tonight = 3;
        }else if(time<=18){
          tonight = 2;
        }else if(time<=21){
          tonight = 1;
        }else if(time<=24){
          tonight = 0;
        }

    this.setState({
      temperature: Math.round(data.list[0].main.temp - 273),
      city: data.name,
      country: data.list[0].sys.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description,
        main: data.list[0].weather[0].main,
      error: undefined,
        lat: data.city.coord.lat,
        lng: data.city.coord.lon,
        zoom: 10,
      day: day,
        temp1: Math.round(data.list[tonight].main.temp - 273),
        humidity1: data.list[tonight].main.humidity,
        main1: data.list[tonight].weather[0].main,
        temp2: Math.round(data.list[tonight + 5].main.temp - 273),
        humidity2: data.list[tonight + 5].main.humidity,
        main2: data.list[tonight + 5].weather[0].main,
        temp3: Math.round(data.list[tonight + 13].main.temp - 273),
        humidity3: data.list[tonight + 13].main.humidity,
        main3: data.list[tonight + 13].weather[0].main,
        temp4: Math.round(data.list[tonight + 21].main.temp - 273),
        humidity4: data.list[tonight + 21].main.humidity,
        main4: data.list[tonight + 21].weather[0].main,
        temp5: Math.round(data.list[tonight + 29].main.temp - 273),
        humidity5: data.list[tonight + 29].main.humidity,
        main5: data.list[tonight + 29].weather[0].main,
    });
        window.initMap()
    } else {
      this.setState({
        temperature:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the correct location",
          temp1:undefined,
          humidity1: undefined,
          main1: undefined,
          temp2:undefined,
          humidity2: undefined,
          main2: undefined,
          temp3:undefined,
          humidity3: undefined,
          main3: undefined,
          temp4:undefined,
          humidity4: undefined,
          main4: undefined,
          temp5:undefined,
          humidity5: undefined,
          main5: undefined,
      })
    }
  };



  render() {

    return(
        <div className='App'>
          <div className='block'>
              <div className="title">
          <Title
              lat = {this.state.lat}
              lng = {this.state.lng}
              zoom={this.state.zoom}
          />
              </div>
          <div className="form1">
          <Form getWeather={this.getWeather}/>
          <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error = {this.state.error}
              main = {this.state.main}
              temp1 = {this.state.temp1}
              humidity1={this.state.humidity1}
              main1 = {this.state.main1}
              temp2 = {this.state.temp2}
              humidity2={this.state.humidity2}
              main2 = {this.state.main2}
              temp3 = {this.state.temp3}
              humidity3={this.state.humidity3}
              main3 = {this.state.main3}
              temp4 = {this.state.temp4}
              humidity4={this.state.humidity4}
              main4 = {this.state.main4}
              temp5 = {this.state.temp5}
              humidity5={this.state.humidity5}
              main5 = {this.state.main5}
              day = {this.state.day}
          />
          </div>
          </div>
        </div>

    )
  }
}
