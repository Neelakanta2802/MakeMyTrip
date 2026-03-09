import React from "react";
import "./OneWayFlight.css";
import { useState } from "react";
import './OneWayFlight.css';
function OneWayFlight() {
  const [from, setFrom] = useState("Hyderabad");
  const [to, setTo] = useState("Bangloore");
  const [departure, setDeparture] = useState("");
  const [returntrip, setReturnTrip] = useState("");
  const [travellersclass, setTravellersClass] = useState("");

  const cities = [
    "Hyderabad",
    "Mumbai",
    "Chennai",
    "banglore",
    "Kolkata",
    "Kuala Lumpur",
    "Male",
    "Singapore",
    "Dubai",
  ];

const flightsData = {
    from:"",
    to:"",
    departure: "",
    return: "",
    adults: 1,
    children: 0,
    infants: 0,
    class: "Economy"
}

  function handleFrom(e) {
    setFrom(e.target.value);
  }
  function handleTo(e) {
    setTo(e.target.value);
  }
  function handleDeparture(e) {
    setDeparture(e.target.value);
  }
  function handleReturnTrip(e) {
    setReturnTrip(e.target.value);
  }
  function handleTravelClass(e) {
    setTravellersClass(e.target.value);
  }
  const filterFlightsFrom = cities.filter((city) => 
    city.toLowerCase().includes(flightsData.from.toLowerCase())
  )
   const filterFlightsTo = cities.filter((city) => 
    city.toLowerCase().includes(flightsData.to.toLowerCase())
  )

  return (
    <div className="container">
      <input placeholder="From" value={from} onChange={handleFrom} />
      
      <input placeholder="To"  value={to} onChange={handleTo} />
      
      <input placeholder="Departure"  onChange={handleDeparture} />
      <input placeholder="Return" onChange={handleReturnTrip} />
      <input placeholder="Travellers & Class" onChange={handleTravelClass} />
    </div>
  );

}

export default OneWayFlight;
