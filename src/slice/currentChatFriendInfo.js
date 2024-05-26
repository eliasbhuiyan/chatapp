import { createSlice } from "@reduxjs/toolkit";
export const friendInfoSlice = createSlice({
  name: "chatfriendinfo",
  initialState: {
    friendInfo: JSON.parse(localStorage.getItem("currentFriendInfo"))
      ? JSON.parse(localStorage.getItem("currentFriendInfo"))
      : null,
  },
  reducers: {
    currentFriendInfo: (state, action) => {
      state.friendInfo = action.payload;
    },
  },
});

export const { currentFriendInfo } = friendInfoSlice.actions;

export default friendInfoSlice.reducer;
