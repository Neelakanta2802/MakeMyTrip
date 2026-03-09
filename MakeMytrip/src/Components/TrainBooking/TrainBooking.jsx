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

export default function RowRadioButtonsGroup() {
  const [selectOption, setSelectOption] = useState("BookTrainTickets");
  
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
          <div>Book Tarin Tickets coming</div>
        </>
      );
    }
    if (selectOption === "CheckPnrStatus") {
      return (
        <>
          <div>Check PNR Status coming</div>
        </>
      );
    }
    if (selectOption === "LiveTrainStatus") {
      return (
        <>
          <div>Live Train Status coming</div>
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
      <FormControl>
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
    </>
  );
}
