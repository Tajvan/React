import React, { useState } from "react";
import Time from "./Time";
import axios from "axios";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [weatherDate, setweatherDate] = useState({ ready: false });

  function showWeather(response) {
    console.log(response);
    setweatherDate({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      presure: response.data.temperature.pressure,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <div>
          <div>
            <Time date={weatherDate.date}/>
          </div>
        </div>
        <div>
          <h4 className="temperature">{Math.round(weatherDate.temperature)}</h4>
          <span className="unitsCelsia">°C</span>
          <span className="stick">|</span>
          <span className="unitsFarenheit">°F</span>
          <span className="weathername">{weatherDate.description}</span>
          <h1>{weatherDate.city}</h1>
        </div>
        <div className="additionalinformation">
          <p>
            <li className="wind">
              Wind <span class="windValue">{weatherDate.wind}</span>
              <span>m/s</span>
            </li>
            <li className="pressure">
              Pressure <span class="pressureValue">{weatherDate.presure}</span>
              <span>hPa</span>
            </li>
            <li className="humidity">
              Humidity{" "}
              <span className="humidityValue">{weatherDate.humidity}</span>
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
