import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
  },
  reducers: {
    loggeduser: (state, payload) => {
      console.log(payload);
      state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggeduser } = userSlice.actions;

export default userSlice.reducer;
