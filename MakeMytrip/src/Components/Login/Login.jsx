import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { modalPopupOpen } from "../../App";
import { useDispatch } from "react-redux";
import { userClickedLogin } from "../../Redux/Slices/LoginSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(modalPopupOpen);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [access_token, setAccess_token] = useState("");
  const name = "Prakash";

  if (!isOpen) return null;

  //payload
  async function handleLogin() {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password },
      );

      localStorage.setItem("access_token", response.data.access_token);
      const accessToken = response.data.access_token;
      dispatch(userClickedLogin({ email, password, accessToken }));
      setIsOpen(false);
      navigate("/userprofile");
    } catch (error) {
      alert("Login failed");
    }
  }

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <button className="closeBtn" onClick={() => setIsOpen(false)}>
          X
        </button>

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

// flow

// handleLogin()

// dispatch(userClickedLogin())

// Loginreducer

// reducer:{

//   userClickedLogin : ()=>{
//     state.userName  = "sjhdgjhsdgfjhsgdf"
//   }
// }
