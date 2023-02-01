import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeekWeatherStyle.css";

export default function WeekWeather(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function SearchWeekWeather(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weekWeather">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let key = "f3009e4852fa0a079dab291dabf020c4";
    let lat = props.coords.latitude;
    let lon = props.coords.longitude;
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
    axios.get(url).then(SearchWeekWeather);

    return null;
  }
}
