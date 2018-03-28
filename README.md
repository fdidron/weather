# Seek's super weather app

The goal of these courses is to get acquainted with the React ecosystem and its concepts.

## Structure

The repo is organized as a mono repo, each coding session lives in its session[n] directory. Each session directory contains a README.md that includes the session plan

##Cheatsheet
This section contains code snippets / notes that will be used accross sessions

### Openweather API

The weather app will query weather data from [OpenWeatherMap](https://openweathermap.org/)

API Key: `f00e692b32ce62977a0ca79a62628722`
API Query template `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f00e692b32ce62977a0ca79a62628722`
API Response example

```json
{
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 300,
      "main": "Drizzle",
      "description": "light intensity drizzle",
      "icon": "09d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 280.32,
    "pressure": 1012,
    "humidity": 81,
    "temp_min": 279.15,
    "temp_max": 281.15
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.1,
    "deg": 80
  },
  "clouds": {
    "all": 90
  },
  "dt": 1485789600,
  "sys": {
    "type": 1,
    "id": 5091,
    "message": 0.0103,
    "country": "GB",
    "sunrise": 1485762037,
    "sunset": 1485794875
  },
  "id": 2643743,
  "name": "London",
  "cod": 200
}
```

### Fetch API

I always end up looking on the [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) how to use the `fetch` API, might as well put a code snippet in here.

```javascript
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
  })
  .catch(err => {
    console.error(err.message);
  });
```

Using `async / await`

```javascript
const queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f00e692b32ce62977a0ca79a62628722`;

try{
  const weatherData = await fetch(queryUrl).then(res => res.json())
  console.log(weatherData);
}
catch(err) {
  console.error(err.message);
}
```

### React component Lifecycle

Each component has several “lifecycle methods” that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

#### Mounting

These methods are called when an instance of a component is being created and inserted into the DOM:

1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()

#### Updating

An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render()
5. componentDidUpdate()

#### Unmounting

This method is called when a component is being removed from the DOM:

1. componentWillUnmount()

#### Error Handling

This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

1. componentDidCatch()

### Other Component APIs

Each component also provides some other APIs:

1. setState()
2. forceUpdate()

### Component Class Properties

1. defaultProps
2. displayName

### Component Instance Properties

1. props
2. state
