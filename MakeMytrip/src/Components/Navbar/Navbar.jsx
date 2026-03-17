import { useContext } from "react";
import { modalPopupOpen } from "../../App";
import Button from "@mui/material/Button";

function Navbar(){

  const { setIsOpen } = useContext(modalPopupOpen);

  return (
    <Button onClick={() => setIsOpen(true)}>
      LOGIN
    </Button>
  );
}

export default Navbar;