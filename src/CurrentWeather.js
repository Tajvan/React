import React from "react";

export default function CurrentWeather() {
  return (
    <div>
      <h4 className="temperature">12</h4>
      <span className="unitsCelsia">°C</span>
      <span className="stick">|</span>
      <span className="unitsFarenheit">°F</span>
      <span className="weathername">Clear Sky</span>
      <h1>Kyiv</h1>
    </div>
  );
}
