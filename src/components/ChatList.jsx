import React from "react";
import { FaSearch } from "react-icons/fa";
import ChatITems from "./ChatITems";

const ChatList = () => {
  return (
    <div className="p-4 shadow-xl h-screen overflow-hidden w-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-brand">Chat With Friends</h3>
        <button className="py-1 px-3 border border-brand rounded-lg font-semibold text-brand">
          Add
        </button>
      </div>
      <div className="mt-5 flex items-center gap-2 p-1 rounded-xl border border-secondary">
        <FaSearch />
        <input className="outline-0" type="text" placeholder="Search" />
      </div>

      <div className="mt-10 h-8/10 overflow-y-auto">
        <ChatITems />
        <ChatITems />
        <ChatITems />
        <ChatITems />
        <ChatITems />
        <ChatITems />
        <ChatITems />
      </div>
    </div>
  );
};

export default ChatList;
