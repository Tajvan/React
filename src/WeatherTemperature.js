import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function toFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <h4 className="temperature">{Math.round(props.celsius)}</h4>
        <span className="unitsCelsia">°C</span>
        <span className="stick">|</span>
        <span>
          <a href="/" className="unitsFarenheit" onClick={toFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let F = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <h4 className="temperature">{Math.round(props.celsius)}</h4>
        <span>
          <a href="/" className="unitsCelsia" onClick={toCelsius}>
            °C
          </a>
        </span>
        <span className="stick">|</span>
        <span className="unitsFarenheit">°F</span>
      </span>
    );
  }
}
