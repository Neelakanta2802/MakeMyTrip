import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Navbar from "./Components/Navbar/Navbar";
import Button from "@mui/material/Button";
import ItemsCard from "./Components/ItemsCard/ItemsCard";
import FlightsTripCard from "./Components/FlightsTripCard/FlightsTripCard";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import TrainBooking from "./Components/TrainsComponents/TrainBooking/TrainBooking.jsx"

function App() {
  return (
    <>
      <Navbar />
      <ItemsCard />   
  
      <BrowserRouter>
        <Routes>
          <Route path="/railways" element={<TrainBooking />} />

          <Route path="/flighttrip" element={<FlightsTripCard />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
