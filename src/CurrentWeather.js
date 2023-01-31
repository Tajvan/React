import React, { useState } from "react";
import Time from "./Time";
import axios from "axios";
import Weatherinfo from "./WeatherInfo";
import WeekWeather from "./WeekWeather";

export default function CurrentWeather(props) {
  const [weatherDate, setweatherDate] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setweatherDate({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      presure: response.data.temperature.pressure,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      coordinate: response.data.coordinates,
    });
  }

  function Search() {
    let key = "12ct3aa05c4b0c7ae44f804a0oe4060d";
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherDate.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" onChange={handleCityChange} />
        </form>
        <div>
          <Weatherinfo data={weatherDate} />
        </div>
        <div>
          <div>
            <Time date={weatherDate.date} />
          </div>
          <div>
            <WeekWeather coords={weatherDate.coordinate} />
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading";
  }
}
