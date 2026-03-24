// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Redux/Slices/CounterSlice";
import LoginSlice from "./Redux/Slices/LoginSlice";
import  SignUpSlice  from "./Redux/Slices/SignUpSlice";
import  DashboardSlice  from "./Redux/Slices/DashboardSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    Login: LoginSlice,
    SignUp: SignUpSlice,
    Dashboard:DashboardSlice
  },
});
