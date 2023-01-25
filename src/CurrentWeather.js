import React from "react";

export default function CurrentWeather() {
  return (
    <div>
      <h4 className="temperature">12</h4>
      <a className="unitsCelsia">°C</a>
      <span className="stick">|</span>
      <a className="unitsFarenheit">°F</a>
      <span className="weathername">Clear Sky</span>
      <h1>Kyiv</h1>
    </div>
  );
}
