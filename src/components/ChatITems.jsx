import React from "react";

const ChatITems = () => {
  return (
    <div className="flex items-center gap-4 my-4 cursor-pointer">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
        <img className="w-full" src="/profile.png" alt="profile" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold text-brand">User Name</h2>
        <p className="text-base font-normal text-secondary">Hello</p>
      </div>
      <p className="text-base font-normal text-secondary mb-auto ml-auto">
        10:30 PM
      </p>
    </div>
  );
};

export default ChatITems;
