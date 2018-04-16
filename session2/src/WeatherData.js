import React, {Component} from 'react';
import WeatherIcon from 'react-open-weather-icons';

const style = {
  maxWidth: 200,
  margin: '20px auto',
};
class WeatherData extends Component {
  state = {
    weatherData: null,
  };

  fetchWeatherData = async city => {
    this.setState({weatherData: null});
    const queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f00e692b32ce62977a0ca79a62628722`;

    try {
      const weatherData = await fetch(queryUrl).then(res => res.json());
      this.setState({weatherData});
    } catch (err) {
      console.error(err.message);
    }
  };

  componentWillReceiveProps(nextProps) {
    const currentCity = this.props.match.params.city;
    const newCity = nextProps.match.params.city;
    if (newCity !== currentCity) {
      this.fetchWeatherData(newCity);
    }
  }

  componentDidMount() {
    const {city} = this.props.match.params;
    this.fetchWeatherData(city);
  }

  render() {
    if (this.state.weatherData === null) return <h2>Loading</h2>;
    const {icon, main, description} = this.state.weatherData.weather[0];
    const {name} = this.state.weatherData;
    return (
      <div style={style}>
        <WeatherIcon name={icon} className="my-awesome-icon" />
        <h1>{name}</h1>
        <h3>{main}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default WeatherData;
