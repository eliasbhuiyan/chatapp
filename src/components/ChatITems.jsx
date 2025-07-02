import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectConversation } from "../store/slices/convarsationSlice";

const ChatITems = ({ name, avatar, id, conVoID, lastMessage }) => {
  const activeFriend = useSelector((state) => state.activeFriend.friend);
  const dispatch = useDispatch();
  const handelClick = () => {
    if (activeFriend?.id !== id)
      dispatch(selectConversation({ name, avatar, id, conVoID }));
  };
  return (
    <div
      onClick={handelClick}
      className="flex items-center gap-4 my-4 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
        <img className="w-full" src={avatar} alt="profile" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold text-brand">{name}</h2>
        <p className="text-base font-normal text-secondary">
          {lastMessage && lastMessage.length > 12
            ? lastMessage.substring(0, 10) + "..."
            : lastMessage}
        </p>
      </div>
      <p className="text-base font-normal text-secondary mb-auto ml-auto">
        10:30 PM
      </p>
    </div>
  );
};

export default ChatITems;
