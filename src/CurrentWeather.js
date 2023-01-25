import React from "react";

export default function CurrentWeather() {
  return (
    <div>
      <h4 className="temperature" id="temperature">
        12
      </h4>
      <a className="unitsCelsia" href="#" id="celsia-unit">
        °C
      </a>
      <span className="stick">|</span>
      <a className="unitsFarenheit" href="#" id="farenheit-unit">
        °F
      </a>
      <span className="weathername" id="weather-name">
        Clear Sky
      </span>
      <h1>Kyiv</h1>
    </div>
  );
}
