import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    friend: null,
  },
  reducers: {
    selectConversation: (state, actions) => {
      state.friend = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectConversation } = conversationSlice.actions;

export default conversationSlice.reducer;
