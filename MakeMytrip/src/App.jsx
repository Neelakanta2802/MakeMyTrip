import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Button from "@mui/material/Button";
import ItemsCard from "./Components/ItemsCard/ItemsCard";
import FlightsTripCard from "./Components/FlightsTripCard/FlightsTripCard";
function App() {
  return (
    <>
      <Navbar />
      <ItemsCard />
      <FlightsTripCard/>
    </>
  );
}

export default App;
