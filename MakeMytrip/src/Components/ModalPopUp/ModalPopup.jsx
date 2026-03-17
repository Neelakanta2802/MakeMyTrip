import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { modalPopupOpen } from "../../App";
import { useContext } from "react";
import Login from "../Login/Login";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function ModalPopup() {

  const { isOpen, setIsOpen } = useContext(modalPopupOpen);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="login-modal"
    >
      <Box sx={style}>

        <Button
          style={{ float: "right" }}
          onClick={handleClose}
        >
          X
        </Button>

        <Login />

      </Box>
    </Modal>
  );
}