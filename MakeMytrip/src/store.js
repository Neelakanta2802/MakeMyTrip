// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Redux/Slices/CounterSlice";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
  },
});
