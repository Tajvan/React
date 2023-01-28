import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div>
      <div>
       
        <WeatherTemperature celsius={props.data.temperature} />

        <span className="weathername">{props.data.description}</span>
        <h1>{props.data.city}</h1>
      </div>
      <div className="additionalinformation">
        <p>
          <li className="wind">
            Wind <span class="windValue">{props.data.wind}</span>
            <span>m/s</span>
          </li>
          <li className="pressure">
            Pressure <span class="pressureValue">{props.data.presure}</span>
            <span>hPa</span>
          </li>
          <li className="humidity">
            Humidity{" "}
            <span className="humidityValue">{props.data.humidity}</span>
            <span>%</span>
          </li>
        </p>
      </div>
    </div>
  );
}
