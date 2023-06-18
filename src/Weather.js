import React from "react";
// import WeatherInfo from "./WeatherInfo";
// import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  // const [weatherData, setWeatherData] = useState({ ready: false });
  // const [city, setCity] = useState(props.defaultCity);

  // function handleResponse(response) {
  //   setWeatherData({
  //     ready: true,
  //     coordinates: response.data.coord,
  //     temperature: response.data.main.temp,
  //     humidity: response.data.main.humidity,
  //     date: new Date(response.data.dt * 1000),
  //     description: response.data.weather[0].description,
  //     icon: response.data.weather[0].icon,
  //     wind: response.data.wind.speed,
  //     city: response.data.name,
  //   });
  // }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     search();
  //   }

  // function handleCityChange(event) {
  //   setCity(event.target.value);
  // }

  //   function search() {
  const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  //   }

  //   if (weatherData.ready) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
              // onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 mt-3">
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weatherimage"
            />
            <span className="temperature">6</span>
            <span className="unit">℃</span>
          </div>
        </div>
        <div className="col-6 mt-4">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 63%</li>
            <li>Wind: 6 mph</li>
          </ul>
        </div>
      </div>
      {/* <WeatherInfo data={weatherData} /> */}
      {/* <WeatherForecast coordinates={weatherData.coordinates} /> */}
    </div>
  );
  //   } else {
  //     // search();
  //     return "Loading...";
  //   }
}
