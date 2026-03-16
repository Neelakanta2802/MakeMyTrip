import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Button from "@mui/material/Button";
import ItemsCard from "./Components/ItemsCard/ItemsCard";
import FlightsTripCard from "./Components/FlightsTripCard/FlightsTripCard";
import TrainBooking from "./Components/TrainBooking/TrainBooking.jsx"
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ItemsCard />   
      <BrowserRouter>
        <Routes>
          <Route path="trainbook" element={<TrainBooking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
