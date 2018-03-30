import React, {Component} from 'react';
import WeatherIcon from 'react-open-weather-icons';
import Keyword from './Keyword.js';
import './App.css';

class App extends Component {
  state = {
    city: '',
    weatherData: null,
  };

  handleKeywordSubmit = e => {
    e.preventDefault();
    //Call Api
    const {city} = this.state;
    const queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f00e692b32ce62977a0ca79a62628722`;

    fetch(queryUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Oh crap :(');
      })
      .then(weatherData => {
        console.log(weatherData);
        this.setState({weatherData});
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  handleKeywordChange = e => {
    const {value} = e.target;
    this.setState({city: value});
  };

  render() {
    const {weatherData} = this.state;
    const icon =
      weatherData !== null ? (
        <WeatherIcon
          name={weatherData.weather[0].icon}
          className="my-awesome-icon"
        />
      ) : null;
    return (
      <div
        className="App"
        style={{backgroundColor: weatherData !== null ? '#fff' : '#999'}}>
        <Keyword
          onChange={this.handleKeywordChange}
          onSubmit={this.handleKeywordSubmit}
        />
        {icon}
      </div>
    );
  }
}

export default App;
