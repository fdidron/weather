import React from 'react';
import {Route} from 'react-router-dom';
import Keyword from './Keyword.js';
import WeatherData from './WeatherData.js';
import WeatherIcon from 'react-open-weather-icons';

import './App.css';

const NoResults = () => {
  return <h2>No results</h2>;
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Keyword label="Enter a city" />
        </header>
        <Route exact path="/" component={NoResults} />
        <Route path="/:city" component={WeatherData} />
      </div>
    );
  }
}

export default App;
