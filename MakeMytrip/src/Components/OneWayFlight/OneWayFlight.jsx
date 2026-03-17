import React from "react";
import "./OneWayFlight.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function OneWayFlight() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returntrip, setReturnTrip] = useState("");
  const [travellersclass, setTravellersClass] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
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
    from: "",
    to: "",
    departure: "",
    return: "",
    adults: 1,
    children: 0,
    infants: 0,
    class: "Economy",
  };
function CustomToolbarFormat() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        defaultValue={dayjs('2022-04-17')}
        slotProps={{
          toolbar: { toolbarFormat: 'ddd DD MMMM', hidden: false },
        }}
      />
    </LocalizationProvider>
  );
}
  function handleFrom(e) {
    setFrom(e.target.value);
    setShowFromDropdown(true);
  }
  function handleTo(e) {
    setTo(e.target.value);
    setShowToDropdown(true);
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
    city.toLowerCase().startsWith(from.toLowerCase()),
  );
  const filterFlightsTo = cities.filter((city) =>
    city.toLowerCase().startsWith(to.toLowerCase()),
  );

  return (
    <div className="container">
      <div className="search-box">
        <input placeholder="From" value={from} onChange={handleFrom} />
        {showFromDropdown && (
          <ul className="dropdown">
            {filterFlightsFrom.map((city, index) => (
              <li
                key={index}
                onClick={() => {
                  setFrom(city);
                  setShowFromDropdown(false);
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="search-box">
        <input placeholder="To" value={to} onChange={handleTo} />
        {showToDropdown && (
          <ul className="dropdown">
            {filterFlightsTo.map((city, index) => (
              <li
                key={index}
                onClick={() => {
                  setTo(city);
                  setShowToDropdown(false);
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input placeholder="Departure" onChange={handleDeparture} type="date" onClick={CustomToolbarFormat}/>
      
      <input placeholder="Return" onChange={handleReturnTrip} type="date"/>
      <input placeholder="To"  value={to} onChange={handleTo} />
      
      <input placeholder="Departure"  onChange={handleDeparture} />
      <input placeholder="Return" onChange={handleReturnTrip} />
      <input placeholder="Travellers & Class" onChange={handleTravelClass} />
    </div>
  );
}

export default OneWayFlight;
