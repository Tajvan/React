import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeekWeatherStyle.css";

export default function WeekWeather(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {

    setLoaded(false);
  }, [props.coords]);

  function SearchWeekWeather(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weekWeather">
        <table className="weeksValue">
          <tbody>
            <WeatherForecastDay data={forecast[0]} />
            <WeatherForecastDay data={forecast[1]} />
            <WeatherForecastDay data={forecast[2]} />
            <WeatherForecastDay data={forecast[3]} />
            <WeatherForecastDay data={forecast[4]} />
            <WeatherForecastDay data={forecast[5]} />
          </tbody>
        </table>
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
