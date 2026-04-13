import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { modalPopupOpen } from "../../App";
import { useDispatch } from "react-redux";
import { userClickedLogin } from "../../Redux/Slices/LoginSlice";

type userCredentials = {
  email: string;
  password: string;
  handleLogin: () => void;
  handlePassWord: () => void;
};

type email = string;
type password = string;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(modalPopupOpen);

  const [email, setEmail] = useState<email>("12345");
  const [password, setPassword] = useState<password>("12345");
  const [access_token, setAccess_token] = useState("");

  if (!isOpen) return null;


  //payload
  async function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
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

  function handlePassWord(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
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
        <input type="password" value={password} onChange={handlePassWord} />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;


