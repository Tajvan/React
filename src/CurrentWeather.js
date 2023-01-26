import React, { useState } from "react";
import axios from "axios";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [wind, setWind] = useState(null);
  const [presure, setPresure] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(" ");
  const [city, setCity] = useState("");

  function showWeather(response) {
    console.log(response);
    setReady(true);
    setTemperature(Math.round(response.data.temperature.current));
    setWind(response.data.wind.speed);
    setPresure(response.data.temperature.pressure);
    setHumidity(response.data.temperature.humidity);
    setDescription(response.data.condition.description);
    setCity(response.data.city);
  }

  if (ready) {
    return (
      <div>
        <div>
          <h4 className="temperature">{temperature}</h4>
          <span className="unitsCelsia">°C</span>
          <span className="stick">|</span>
          <span className="unitsFarenheit">°F</span>
          <span className="weathername">{description}</span>
          <h1>{city}</h1>
        </div>
        <div className="additionalinformation">
          <p>
            <li className="wind">
              Wind <span class="windValue">{wind}</span>
              <span>m/s</span>
            </li>
            <li className="pressure">
              Pressure <span class="pressureValue">{presure}</span>
              <span>hPa</span>
            </li>
            <li className="humidity">
              Humidity <span className="humidityValue">{humidity}</span>
              <span>%</span>
            </li>
          </p>
        </div>
      </div>
    );
  } else {
    let key = "12ct3aa05c4b0c7ae44f804a0oe4060d";
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=Kyiv&key=${key}&units=${units}`;
    axios.get(url).then(showWeather);

    return "Loading";
  }
}
