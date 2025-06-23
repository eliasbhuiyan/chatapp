import React from "react";
import { useSelector } from "react-redux";

const ChatITems = ({ name, avatar, id }) => {
  return (
    <div className="flex items-center gap-4 my-4 cursor-pointer">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
        <img className="w-full" src={avatar} alt="profile" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold text-brand">{name}</h2>
        <p className="text-base font-normal text-secondary">Hello</p>
      </div>
      <p className="text-base font-normal text-secondary mb-auto ml-auto">
        10:30 PM
      </p>
    </div>
  );
};

export default ChatITems;
