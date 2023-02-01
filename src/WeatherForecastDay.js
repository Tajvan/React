import React from "react";
import "./WeekWeatherStyle.css";

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
    <div>
      <table className="weeksValue">
        <tr>
          <th className="weekday">{day()}</th>
          <td className="daytemp">
            <span className="min-temp">{min()}</span> -{" "}
            <span className="max-temp">{max()}</span>
          </td>
        </tr>
        <tr>
          <th className="imgholder">
            <img src="/" alt="" />
            <hr />
          </th>
        </tr>
      </table>
    </div>
  );
}
