import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Navbar from "./Components/Navbar/Navbar";
import Button from "@mui/material/Button";
import ItemsCard from "./Components/ItemsCard/ItemsCard";
import FlightsTripCard from "./Components/FlightsTripCard/FlightsTripCard";
import TrainBooking from "./Components/TrainBooking/TrainBooking.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";


function App() {
  return (
    <>
      <Navbar />
      <ItemsCard />
      {/* Button 
      <Button variant="contained">Hello world </Button>
      flights | Hotels | Railways | */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
           <Route path="/userprofile" element={<UserProfile />} />
          
          <Route path="/trainbook" element={<TrainBooking />} />
          <Route path="/flighttrip" element={<FlightsTripCard />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
