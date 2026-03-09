import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Button from "@mui/material/Button";
import TrainBooking from "./Components/TrainBooking/TrainBooking.jsx"
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* Button 
      <Button variant="contained">Hello world </Button>
      flights | Hotels | Railways | */}
      <BrowserRouter>
        <Routes>
          <Route path="trainbook" element={<TrainBooking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
