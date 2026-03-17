import { useState } from "react";
import * as React from "react";
import {
  ListItemButton,
  FormControlLabel,
  FormControl,
  Grid,
  List,
  Radio,
  RadioGroup,
  FormLabel,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";
import TrainOffers from "../TrainOffers/TrainOffers";


export default function TrainBooking() {
  const [selectOption, setSelectOption] = useState("BookTrainTickets");
  const [searchbutton, setSearchButton] = useState("Search");

  const handleOption = (e) => {
    setSelectOption(e.target.value);
  };

  const radioButtonOptions = [
    {
      value: "BookTrainTickets",
      label: "Book Train Tickets",
      href: "/trainbook",
    },
    {
      value: "CheckPnrStatus",
      label: "Check PNR Status",
      href: "/pnrstatus",
    },
    {
      value: "LiveTrainStatus",
      label: "Live Train Status",
      href: "/livetrainstatus",
    },
  ];

  function handleOptionLayout() {
    if (selectOption === "BookTrainTickets") {
      return (
        <>
          <div>
            <input type="text" placeholder="From" />
            <input type="text" placeholder="to" />
            <input type="date" name="" id="" />
            <select name="" id="">
              <option value="">Sleeper</option>
              <option value="">Third Ac</option>
              <option value="">Second AC</option>
              <option value="">First AC</option>
            </select>
          </div>
        </>
      );
    }
    if (selectOption === "CheckPnrStatus") {
      return (
        <>
          <input type="number" />
          <button>Check PNR Status</button>
        </>
      );
    }
    if (selectOption === "LiveTrainStatus") {
      return (
        <>
          <input type="number" />
          <button>Live Train Status</button>
        </>
      );
    }
  }

  function displayRadioOptions() {
    return radioButtonOptions.map(function (data) {
      return (
        <>
          <FormControlLabel
            value={data.value}
            control={<Radio />}
            label={data.label}
          />
        </>
      );
    });
  }

  return (
    <>
      <FormControl className=".radio-group">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={selectOption}
          onChange={handleOption}
        >
          {displayRadioOptions()}
        </RadioGroup>
      </FormControl>
      <div>{handleOptionLayout()} </div>
<button>Search</button>
      < TrainOffers />
    </>
  );
}
