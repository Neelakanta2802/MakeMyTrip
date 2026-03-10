import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
// import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TrainOffer from "../TrainOffer/TrainOffer";

export default function TrainOffers() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Trains" value="1" />
            <Tab label="All Offers" value="2" />
            <Tab label="Hotels" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TrainOffer />
        </TabPanel>
        <TabPanel value="2">All Offers</TabPanel>
        <TabPanel value="3">Hotels</TabPanel>
      </TabContext>
    </Box>
  );
}
