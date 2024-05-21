import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import currentChatFriendInfo from "./slice/currentChatFriendInfo";
export default configureStore({
  reducer: { userSlice, currentChatFriendInfo },
});
