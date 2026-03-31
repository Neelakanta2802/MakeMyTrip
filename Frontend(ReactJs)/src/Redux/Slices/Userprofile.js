import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const globalUserProfileState = {
  users: [],
};

export const UserProfileSlice = createSlice({
  name: "UserProfile",
  initialState: globalUserProfileState,
  reducers: {
    getUserProfileData: (state, data) => {
      console.log("payload", data.payload);
      state.users = data.payload;
    },
  },
});

export const { getUserProfileData } = UserProfileSlice.actions;

export default UserProfileSlice.reducer;

// login application fileds

// userName
// password
