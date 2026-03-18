import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SampleCards from "../SampleCards/SampleCards";
import "./Flights.css";
function Flights() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All Offers" value="1" />
            <Tab label="Flights" value="2" />
            <Tab label="Hotels" value="3" />
            <Tab label="Holidays" value="4" />
            <Tab label="Trains" value="5" />
            <Tab label="Visa" value="6" />
            <Tab label="Cabs" value="7" />
            <Tab label="Bank Offers" value="8" />
            
          </TabList>
        </Box>

        <TabPanel value="1" >{<SampleCards />}</TabPanel>
        <TabPanel value="2">{<SampleCards />}</TabPanel>
        <TabPanel value="3">{<SampleCards />}</TabPanel>
        <TabPanel value="4">{<SampleCards />}</TabPanel>
        <TabPanel value="5">{<SampleCards />}</TabPanel>
        <TabPanel value="6">{<SampleCards />}</TabPanel>
        <TabPanel value="7">{<SampleCards />}</TabPanel>
        <TabPanel value="8">{<SampleCards />}</TabPanel>
        
      </TabContext>
    </Box>
  );
}
export default Flights;
