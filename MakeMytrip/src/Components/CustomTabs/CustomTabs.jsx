import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Card } from "@mui/material";
import Flights from "../Flights/Flights";

export default function CustomTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("value?", value);

  

  

   function HotelsComponent() {
    return (
      <>
        <Card>Hello this is Hotels card</Card>
      </>
    );
  }


   function VillasComponent() {
    return (
      <>
        <Card>Hello this is Villas card</Card>
      </>
    );
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="flights" value="1" />
            <Tab label="hotels" value="2" />
            <Tab label="villas" value="3" />
            <Tab label="trains" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><Flights/></TabPanel>
        <TabPanel value="2">{HotelsComponent()}</TabPanel>
        <TabPanel value="3">{VillasComponent()}</TabPanel>
        <TabPanel value="4">Trains</TabPanel>
      </TabContext>

      
    </Box>
  );
}
