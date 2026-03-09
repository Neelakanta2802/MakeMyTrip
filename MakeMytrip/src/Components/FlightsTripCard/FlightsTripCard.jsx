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
      >
        <FormControlLabel value="one way" control={<Radio />} label="One Way" />
        <FormControlLabel value="round trip" control={<Radio />} label="Round Trip" />
        <FormControlLabel value="multi city" control={<Radio />} label="Multi City" />      
      </RadioGroup>    
     </FormControl>     
      <p>Book International and Domestic Flights</p>
    </div>
          {tripType === "oneway" && <OneWayFlight />}

    </div>
  )
}
export default FlightsTripCard