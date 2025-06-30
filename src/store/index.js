import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import conversationSlice from "./slices/convarsationSlice";

export default configureStore({
  reducer: {
    userData: authSlice,
    activeFriend: conversationSlice,
  },
});
