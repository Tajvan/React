import React, { useState } from "react";

export default function Input() {
  const [city, setCity] = useState(" ");
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCitychange(event) {
    setCity(event.value);
  }

  return (
   
  );
}
