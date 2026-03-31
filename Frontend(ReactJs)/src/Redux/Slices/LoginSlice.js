import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const globalLoginState = {
  userName: "",
  password: "",
  accessToken: "",
};

export const LoginSlice = createSlice({
  name: "LoginApp",
  initialState: globalLoginState,
  reducers: {
    userClickedLogin: (state, data) => {
      console.log("payload", data.payload);
      const { email, password, accessToken } = data.payload;
      state.userName = email;
      state.password = password;
      state.accessToken = accessToken;
    },
  },
});

export const { userClickedLogin } = LoginSlice.actions;

export default LoginSlice.reducer;

// login application fileds

// userName
// password
