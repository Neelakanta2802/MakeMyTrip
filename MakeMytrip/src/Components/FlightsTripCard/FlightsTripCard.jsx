import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OneWayFlight from '../OneWayFlight/OneWayFlight';
import './FlightsTripCard.css'
function FlightsTripCard() {
   
    const [tripType, setTripType] = useState('oneway');

  return (
    <div  className='flights-container'>
      <div className='radio-buttons'>
      <FormControl  >       
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" 
        value={tripType}
         onChange={(e) => setTripType(e.target.value)}
      >
        <FormControlLabel value="oneway" control={<Radio />} label="One Way" />
        <FormControlLabel value="roundtrip" control={<Radio />} label="Round Trip" />
        <FormControlLabel value="multicity" control={<Radio />} label="Multi City" />      
      </RadioGroup>    
     </FormControl>     
      <p>Book International and Domestic Flights</p>
    </div>
          {tripType === "oneway" && <OneWayFlight />}
          {tripType === "roundtrip" && <RoundTripFlight />}
          {tripType === "multicity" && <MultiCityFlight />}

    </div>
  )
}
export default FlightsTripCard