import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const globalLoginState = {
  userName: "",
  password: "",
};

export const DashboardSlice = createSlice({
  name: "LoginApp",
  initialState: globalLoginState,
  reducers: {
    userClickedLogin: (state) => {
      state.userName = "hello shiva this is ur first redux slice";
    },
  },
});

export const { userClickedLogin } = DashboardSlice.actions;

export default DashboardSlice.reducer;


