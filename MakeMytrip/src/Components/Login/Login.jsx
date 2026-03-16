import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  const [loginResponse, setLoginResponse] = useState("");
  const userDetails = {
    email: "john@mail.com",
    password: "changeme",
  };
  async function handleLogin() {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        userDetails,
      );
      // response
      // reject
      // store state
      setLoginResponse(response.data.access_token);

      localStorage.setItem("access_token", response.data.access_token);
      navigate("/userprofile")
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      userName
      <input type="text" />
      password
      <input type="text" />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;

// LOGIN

// localhost:5000/login

// payload

// {
// username,
// password
// }

// --------- access_token (generated) (eysdfsdfsdfsdfsdsdfsdsdf)

// Funds

// GET    localhost:5000/funds -- backend api

// axios.get("localhost:5000/funds")

// headers : {
//     authrization: Bearer eysdfsdfsdfsdfsdsdfsdsdf
// }

// Holding
// GET localhost:5000/holdings

// headers : {
//     authrization: Bearer eysdfsdfsdfsdfsdsdfsdsdf
// }
// Postions

// GET localhost:5000/positions

// headers : {
//     authrization: Bearer eysdfsdfsdfsdfsdsdfsdsdf
// }
