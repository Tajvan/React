import "./App.css";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="boarder">
      <button className="gpsButton">
        <i className="fa-solid fa-location-dot gps"></i>
      </button>
      <CurrentWeather defaultCity="Kyiv" />

      <div className="coder">
        Coded by
        <a
          href="https://github.com/Tajvan/React"
          target="_blank"
          rel="noreferrer"
        >
          Kseniia
        </a>
      </div>
    </div>
  );
}
