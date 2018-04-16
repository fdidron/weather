import React from 'react';
import {withRouter} from 'react-router-dom';

class Keyword extends React.Component {
  constructor() {
    super();
    this.state = {city: ''};
  }

  handleChange = e => {
    const {value} = e.target;
    this.setState({city: value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const {city} = this.state;
    if (city !== '') this.props.history.push(city);
  };

  componentWillReceiveProps(nextProps) {
    const currentCity = this.props.location.pathname;
    const newCity = nextProps.location.pathname;
    if (newCity !== currentCity) {
      this.setState({city: ''});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.label}</h1>
        <input
          type="search"
          name="city"
          onChange={this.handleChange}
          value={this.state.city}
        />
        <button html="submit">Submit</button>
      </form>
    );
  }
}

export default withRouter(Keyword);
