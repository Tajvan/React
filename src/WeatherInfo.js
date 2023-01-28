import React from "react";

export default function Weatherinfo(props) {
  return (
    <div>
      <div>
        <h4 className="temperature">{Math.round(props.data.temperature)}</h4>
        <span className="unitsCelsia">°C</span>
        <span className="stick">|</span>
        <span className="unitsFarenheit">°F</span>
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
