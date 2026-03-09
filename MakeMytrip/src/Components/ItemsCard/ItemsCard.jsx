import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import BusinessIcon from '@mui/icons-material/Business';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SubwayIcon from '@mui/icons-material/Subway';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SailingIcon from '@mui/icons-material/Sailing';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import './ItemsCard.css'
function ItemsCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tab-container'>
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" className='items-card' >
      <Tab icon={<LocalAirportIcon/>} label="Flights" className='tab'/>
      <Tab icon={<HolidayVillageIcon />} label="Hotels" className='tab'/>
      <Tab icon={<BusinessIcon />} label="Villas & Homestays" className='tab'/>
      <Tab icon={<BeachAccessIcon />} label="Holiday Package" className='tab' />
      <Tab icon={<SubwayIcon />} label="Trains" className='tab'/>
      <Tab icon={<AirportShuttleIcon />} label="Buses" className='tab' />
      <Tab icon={<LocalTaxiIcon />} label="Cabs" className='tab'/>
      <Tab icon={<EmojiObjectsIcon />} label="Tours & Attractions" className='tab'/>
      <Tab icon={<CollectionsBookmarkIcon />} label="Visa" className='tab'/>
      <Tab icon={<SailingIcon />} label="Cruise" className='tab'/>
      <Tab icon={<LocalAtmIcon />} label="Forex Card & Currency" className='tab' />
      <Tab icon={<AirplaneTicketIcon />} label="Travel Insurance" className='tab'/>
    </Tabs>
    </div>
  );
}
export default ItemsCard;