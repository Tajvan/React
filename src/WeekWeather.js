import React, { useState } from "react";
import axios from "axios";

import "./WeekWeatherStyle.css";

export default function WeekWeather(props) {
  let key = "f3009e4852fa0a079dab291dabf020c4";
  let lat = props.coords.latitude;
  let lon = props.coords.longitude;
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
  axios.get(url).then(SearchWeekWeather);

  function SearchWeekWeather(response) {}

  return (
    <div className="weekWeather">
      <table className="weeksValue">
        <tr>
          <th className="weekday">Monday</th>
          <td className="daytemp">
            <span className="min-temp">-8</span> -{" "}
            <span className="max-temp">-4</span>
          </td>
        </tr>
        <tr>
          <th className="imgholder">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <hr />
          </th>
        </tr>
        <tr>
          <th className="weekday">Monday</th>
          <td className="daytemp">
            <span className="min-temp">-8</span> -{" "}
            <span className="max-temp">-4</span>
          </td>
        </tr>
        <tr>
          <th className="imgholder">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <hr />
          </th>
        </tr>
        <tr>
          <th className="weekday">Monday</th>
          <td className="daytemp">
            <span className="min-temp">-8</span> -{" "}
            <span className="max-temp">-4</span>
          </td>
        </tr>
        <tr>
          <th className="imgholder">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <hr />
          </th>
        </tr>
        <tr>
          <th className="weekday">Monday</th>
          <td className="daytemp">
            <span className="min-temp">-8</span> -{" "}
            <span className="max-temp">-4</span>
          </td>
        </tr>
        <tr>
          <th className="imgholder">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <hr />
          </th>
        </tr>
        <tr>
          <th className="weekday">Monday</th>
          <td className="daytemp">
            <span className="min-temp">-8</span> -{" "}
            <span className="max-temp">-4</span>
          </td>
        </tr>
        <tr>
          <th className="imgholder">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <hr />
          </th>
        </tr>
        <tr>
          <th className="weekday">Monday</th>
          <td className="daytemp">
            <span className="min-temp">-8</span> -{" "}
            <span className="max-temp">-4</span>
          </td>
        </tr>
        <tr>
          <th className="imgholder">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <hr />
          </th>
        </tr>
      </table>
    </div>
  );
}

//lat: response.data.coordinates.latitude
//lon: response.data.coordinates.longitude
