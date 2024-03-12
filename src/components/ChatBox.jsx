import React from "react";
import { IoSend } from "react-icons/io5";

const ChatBox = () => {
  return (
    <div className="chatbox w-full bg- mx-8 mt-8">
      <div className="flex p-3 gap-4 items-center border-b">
        <div>
          <img src="/user.png" alt="alt" />
        </div>
        <div>
          <h2 className="text-xl font-primary text-white font-bold">
            Eddie Lake
          </h2>
        </div>
      </div>
      <div className="messages-area">
        <div className="message"></div>
        <div className="message"></div>
        <div className="message"></div>
        <div className="message"></div>
      </div>
      <div className="sender-area ">
        <div className="input-place w-full mr-3 flex justify-between">
          <input
            placeholder="Send a message."
            className="send-input w-full"
            type="text"
          />
          <div className="send">
            <IoSend className="text-white" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ChatBox;
