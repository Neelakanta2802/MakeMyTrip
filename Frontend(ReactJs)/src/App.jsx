import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Navbar from "./Components/Navbar/Navbar";
import ItemsCard from "./Components/ItemsCard/ItemsCard";
import FlightsTripCard from "./Components/FlightsTripCard/FlightsTripCard";
import TrainBooking from "./Components/TrainBooking/TrainBooking";
import Login from "./Components/Login/Login";
import UserProfile from "./Components/UserProfile/UserProfile";
import ModalPopup from "./Components/ModalPopUp/ModalPopup";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { userNameContext } from "./Components/ContextAPI/userNameContext/userNameContext";
import Counter from "./Counter";

export const passwordContext = createContext();
export const modalPopupOpen = createContext();

function App() {
  const username = "Shruthi";
  const password = "Gangadhar";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <modalPopupOpen.Provider value={{ isOpen, setIsOpen }}>
      <passwordContext.Provider value={password}>
        <userNameContext.Provider value={username}>
          <BrowserRouter>
            <Navbar />
            <ItemsCard />

            {/* GLOBAL MODAL */}
            <ModalPopup />

            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/trainbook" element={<TrainBooking />} />
              <Route path="/flighttrip" element={<FlightsTripCard />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </BrowserRouter>
        </userNameContext.Provider>
      </passwordContext.Provider>
    </modalPopupOpen.Provider>
  );
}

export default App;
