import React from "react";
import "./WeekWeatherStyle.css";
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
  function max() {
    let maxtemp = Math.round(props.data.temp.max);
    return `${maxtemp}°`;
  }

  function min() {
    let mintemp = Math.round(props.data.temp.min);
    return `${mintemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <span>
      <tr>
        <th className="weekday">{day()}</th>
        <td className="daytemp">
          <span className="min-temp">{min()}</span> -{" "}
          <span className="max-temp">{max()}</span>
        </td>
      </tr>
      <tr>
        <th className="imgholder">
          <Icon code={props.data.weather[0].icon} />
          <hr />
        </th>
      </tr>
    </span>
  );
}
