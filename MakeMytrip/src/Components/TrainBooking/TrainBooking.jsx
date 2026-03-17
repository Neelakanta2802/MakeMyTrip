// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import "./TrainBooking.css";
// import { useState,useEffect } from "react";
// import { Routes,useNavigate } from "react-router";

// export default function TrainBooking() {
//   const [selectTrainOption, setSelectTrainOption] = useState();
// const navigate = useNavigate()

//   return (
//     <>
//       <div className="radio-group">
//         <FormControl>
//           <RadioGroup
//             row
//             aria-labelledby="demo-row-radio-buttons-group-label"
//             name="row-radio-buttons-group"
//             value={selectTrainOption}
//             >
//             <FormControlLabel
//               value="BookTrainTickets"
//               control={<Radio />}
//               onClick={navigate('trainbook')}
//               label="Book Train Tickets"
//             />
//             <FormControlLabel
//               value="CheckPNRStatus"
//               control={<Radio />}
//               label="Check PNR Status"
//             />
//             <FormControlLabel
//               value="LiveTrainStatus"
//               control={<Radio />}
//               label="Live Train Status"
//             />
//           </RadioGroup>
//         </FormControl>
//         <div className="irctc-authorized">
//           <h4>Train Ticket Booking</h4>
//           <p>IRCTC Authorized e-ticketing</p>
//         </div>
//       </div>
//     </>
//   );
// }

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./TrainBooking.css";
import { useContext, useState } from "react";
import { passwordContext } from "../../App";
import { userNameContext } from "../ContextAPI/userNameContext/userNameContext";


export default function TrainBooking() {
  const userName = useContext(userNameContext);

  const password = useContext(passwordContext);

  alert(password);

  const [option, setOption] = useState("BookTrainTickets");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <>
      <div className="radio-group">
        <FormControl>
          <RadioGroup
            row
            value={option}
            onChange={handleChange}
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="BookTrainTickets"
              control={<Radio />}
              label="Book Train Tickets"
            />

            <FormControlLabel
              value="CheckPNRStatus"
              control={<Radio />}
              label="Check PNR Status"
            />

            <FormControlLabel
              value="LiveTrainStatus"
              control={<Radio />}
              label="Live Train Status"
            />
          </RadioGroup>
        </FormControl>

        <div className="irctc-authorized">
          <h4>Train Ticket Booking</h4>
          <p>IRCTC Authorized e-ticketing</p>
        </div>
      </div>

      {/* Layout Switching */}
      <div className="train-layout">
        {option === "BookTrainTickets" && (
          <div>
            <h2>Train Booking</h2>
            <input type="text" placeholder="From Station" />
            <input type="text" placeholder="To Station" />
            <input type="date" />
            <button>Search Trains</button>
          </div>
        )}

        {option === "CheckPNRStatus" && (
          <div>
            <h2>Check PNR Status</h2>
            <input type="text" placeholder="Enter PNR Number" />
            <button>Check Status</button>
          </div>
        )}

        {option === "LiveTrainStatus" && (
          <div>
            <h2>Live Train Status</h2>
            <input type="text" placeholder="Enter Train Number" />
            <button>Check Live Status</button>
          </div>
        )}
      </div>
    </>
  );
}
