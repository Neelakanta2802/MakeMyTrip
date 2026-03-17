import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BusinessIcon from "@mui/icons-material/Business";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import SubwayIcon from "@mui/icons-material/Subway";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import SailingIcon from "@mui/icons-material/Sailing";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import "./ItemsCard.css";
import Flights from "../Flights/Flights";
import Hotels from "../Hotels/Hotels";
import Villas from "../Villas/Villas";
import OneWayFlight from "../OneWayFlight/OneWayFlight";
import FlightsTripCard from "../FlightsTripCard/FlightsTripCard";
function ItemsCard() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }} className="main-container">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tab-container"
          >
            <Tab
              icon={<LocalAirportIcon />}
              label="Flights"
              value="1"
              className="tab"
            />
            <Tab
              icon={<HolidayVillageIcon />}
              label="Hotels"
              value="2"
              className="tab"
            />
            <Tab
              icon={<BusinessIcon />}
              label="Villas & Homestays"
              value="3"
              className="tab"
            />
            <Tab
              icon={<BeachAccessIcon />}
              label="Holiday Package"
              value="4"
              className="tab"
            />
            <Tab
              icon={<SubwayIcon />}
              label="Trains"
              value="5"
              className="tab"
            />
            <Tab
              icon={<AirportShuttleIcon />}
              label="Buses"
              value="6"
              className="tab"
            />
            <Tab
              icon={<LocalTaxiIcon />}
              label="Cabs"
              value="7"
              className="tab"
            />
            <Tab
              icon={<EmojiObjectsIcon />}
              label="Tours & Attractions"
              value="8"
              className="tab"
            />
            <Tab
              icon={<CollectionsBookmarkIcon />}
              label="Visa"
              value="9"
              className="tab"
            />
            <Tab
              icon={<SailingIcon />}
              label="Cruise"
              value="10"
              className="tab"
            />
            <Tab
              icon={<LocalAtmIcon />}
              label="Forex Card & Currency"
              value="11"
              className="tab"
            />
            <Tab
              icon={<AirplaneTicketIcon />}
              label="Travel Insurance"
              value="12"
              className="tab"
            />
          </TabList>
        </Box>

        <TabPanel value="1" className="tab-panel">
          <div className="round-buttons">
            <FlightsTripCard />
          </div>
          

          <div className="offers-section">
            <Flights />
          </div>
          
        </TabPanel>

        <TabPanel value="2" className="tab-panel">
          {<Hotels />}
        </TabPanel>
        <TabPanel value="3" className="tab-panel">
          {<Villas />}
        </TabPanel>
        <TabPanel value="4" className="tab-panel">
          Holiday Package
        </TabPanel>
        <TabPanel value="5" className="tab-panel">
          Trains
        </TabPanel>
        <TabPanel value="6" className="tab-panel">
          Buses
        </TabPanel>
        <TabPanel value="7" className="tab-panel">
          Cabs
        </TabPanel>
        <TabPanel value="8" className="tab-panel">
          Tours & Attractions
        </TabPanel>
        <TabPanel value="9" className="tab-panel">
          Visa
        </TabPanel>
        <TabPanel value="10" className="tab-panel">
          Cruise
        </TabPanel>
        <TabPanel value="11" className="tab-panel">
          Forex Card & Currency
        </TabPanel>
        <TabPanel value="12" className="tab-panel">
          Travel Insurance
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default ItemsCard;
