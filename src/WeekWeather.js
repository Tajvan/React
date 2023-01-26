import React from "react";

import "./WeekWeatherStyle.css";

export default function WeekWeather() {
  return (
    <div className="weekWeather">
      <table className="weeksValue">
        <tr>
          <th className="weekday">Monday</th>
          <td className="daytemp">
            <span className="min-temp">-8</span>
            {" "}-{" "}
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
            <span className="min-temp">-8</span>{" "}-{" "}
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
            <span className="min-temp">-8</span>{" "}-{" "}
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
            <span className="min-temp">-8</span>{" "}-{" "}
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
            <span className="min-temp">-8</span>{" "}-{" "}
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
            <span className="min-temp">-8</span>{" "}-{" "}
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
