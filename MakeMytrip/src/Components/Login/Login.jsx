import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { modalPopupOpen } from "../../App";

function Login() {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(modalPopupOpen);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  async function handleLogin() {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password }
      );

      localStorage.setItem("access_token", response.data.access_token);

      setIsOpen(false);
      navigate("/userprofile");

    } catch (error) {
      alert("Login failed");
    }
  }

  return (
    <div className="modalOverlay">
      <div className="modalBox">

        <button className="closeBtn" onClick={() => setIsOpen(false)}>X</button>

        <h2>Login</h2>

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

      </div>
    </div>
  );
}

export default Login;