import React from "react";

export default function AdditionalInformation() {
  return (
    <div className="additionalinformation">
      <p>
        <li className="wind">
          Wind <span class="windValue">1200</span>
          <span>m/s</span>
        </li>
        <li className="pressure">
          Pressure <span class="pressureValue">1200</span>
          <span>hPa</span>
        </li>
        <li className="humidity">
          Humidity <span className="humidityValue">1200</span>
          <span>%</span>
        </li>
      </p>
    </div>
  );
}
