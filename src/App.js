import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


class App extends Component {

  //constructors sets defaults for all components - search constructors
  constructor(props) {
    super(props);
    this.state = {weather:[]};
  }


  componentDidMount(){ //methods
    
      axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=Lexington&mode=json&units=imperial&cnt=6&APPID=b5004642f125f0706b3f6d7616fa2635`)
      .then ((response) => {
        console.log(response);
        this.setState({
          weather: response.data.list
          })
      })
  } 

  getWeather(){

      axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.city.value}&mode=json&units=imperial&cnt=6&APPID=b5004642f125f0706b3f6d7616fa2635`)
      .then ((response) => {
        console.log(response);
        this.setState({
          weather: response.data.list
          })
      })
  }
// ${this.city.value} value is just the value that returns from the input box
// .bind(this) this makes "this" refer to the whole component instead of just what is being returned in the piece
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather.React</h2>
        </div>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Enter City</label>
                <input type="text" class="form-control" ref={(input) => {this.city = input}} placeholder="City"></input> 
              </div>
              <button type="submit" class="btn btn-default" onClick={this.getWeather.bind(this)}>Submit</button>
            </form>
                    
        <div className="container-fluid App-intro">

          {this.state.weather.map(day=>
            <div className="row">
            <h2 className="temp">High: {day.temp.max}</h2>
            <h2 className="temp">Low: {day.temp.min}</h2>
            </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
