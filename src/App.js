import React, {Component} from "react";
import Title from "./title.js";
import Form from './form';
import Weather from './weather';
import "./App.css"

const API_KEY = 'e3e936e33460527ab6c431786272fe98';

export default class App extends Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
};

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
    this.setState({
      temperature: Math.round(data.main.temp - 273),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: undefined
    })}else{
      this.setState({
        temperature:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the location"
      })
    }
  };


  render() {
    return(
        <div className='App'>
          <div className='block'>
              <div className="title">
          <Title />
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
          />
          </div>
          </div>
        </div>

    )
  }
}