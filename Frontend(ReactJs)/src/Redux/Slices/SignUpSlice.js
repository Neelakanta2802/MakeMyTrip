import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const globalLoginState = {
  userName: "",
  password: "",
  email:'',
  phoneNumber:'',
  address:''
};

export const SignUpSlice = createSlice({
  name: "SignUpApp",
  initialState: globalLoginState,
  reducers: {
    userClickedLogin: (state) => {
      state.userName = "hello shiva this is ur first redux slice";
    },
  },
});

export const { userClickedLogin } = SignUpSlice.actions;

export default SignUpSlice.reducer;

// login application fileds

// userName
// password
