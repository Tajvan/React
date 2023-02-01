import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="/">
      <div className="/">
        <WeatherTemperature celsius={props.data.temperature} />
        <span className="weathername">{props.data.description}</span>
        <h1 className="/">{props.data.city}</h1>
      </div>
      <div className="additionalinformation">
        <p className="/">
          <li className="wind">
            Wind <span className="windValue">{props.data.wind}</span>
            <span className="/">m/s</span>
          </li>
          <li className="pressure">
            Pressure <span className="pressureValue">{props.data.presure}</span>
            <span className="/">hPa</span>
          </li>
          <li className="humidity">
            Humidity{" "}
            <span className="humidityValue">{props.data.humidity}</span>
            <span className="/">%</span>
          </li>
        </p>
      </div>
    </div>
  );
}
