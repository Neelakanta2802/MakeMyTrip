import React from "react";
import "./OneWayFlight.css";
import { useState } from "react";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

function OneWayFlight() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [departure, setDeparture] = useState(dayjs());
  const [returntrip, setReturnTrip] = useState(null);

  const cities = [
    "Hyderabad",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Kuala Lumpur",
    "Male",
    "Singapore",
    "Dubai",
  ];

  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const filterFlightsFrom = cities.filter((city) =>
    city.toLowerCase().startsWith(from.toLowerCase()),
  );

  const filterFlightsTo = cities.filter((city) =>
    city.toLowerCase().startsWith(to.toLowerCase()),
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container">
        {/* FROM */}
        <div className="search-box">
          <input
            placeholder="From"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              setShowFromDropdown(true);
            }}
          />

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

        {/* TO */}
        <div className="search-box">
          <input
            placeholder="To"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              setShowToDropdown(true);
            }}
          />

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

        <DatePicker
          label="Departure"
          value={departure}
          onChange={(newValue) => setDeparture(newValue)}
          slotProps={{
            textField: {
              fullWidth: true,
            },
          }}
        />

        <DatePicker
          label="Return"
          value={returntrip}
          minDate={departure}
          onChange={(newValue) => setReturnTrip(newValue)}
          slotProps={{
            textField: {
              fullWidth: true,
            },
          }}
        />

        <input placeholder="Travellers & Class" />
      </div>
    </LocalizationProvider>
  );
}

export default OneWayFlight;
