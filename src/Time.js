import React from "react";

export default function Time(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minute = props.date.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <div className="time">
      <h4>{day}</h4>
      <h4>
        {hour}:{minute}
      </h4>
    </div>
  );
}
