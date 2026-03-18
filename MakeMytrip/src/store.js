// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Redux/feature/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
  },
});

