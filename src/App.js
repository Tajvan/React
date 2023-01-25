import "./App.css";
import Time from "./Time";
import CurrentWeather from "./CurrentWeather";
import AdditionalInformation from "./AdditionalInformation";
import WeekWeather from "./WeekWeather";

export default function App() {
  return (
    <div className="boarder">
      <form>
        <input type="text" placeholder="Search" />
      </form>
      <Time />
      <button className="gpsButton">
        <i className="fa-solid fa-location-dot gps"></i>
      </button>
      <CurrentWeather />
      <AdditionalInformation />
      <WeekWeather />
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
