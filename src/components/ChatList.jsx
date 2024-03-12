import React from "react";

const ChatList = () => {
  return (
    <div className="flex gap-4 cursor-pointer border-b">
      <div>
        <img src="/user.png" alt="alt" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          Eddie Lake
        </h2>
        <p className="text-lg font-primary text-secondary font-normal">
          Need Money.....
        </p>
      </div>
      <p className="ml-auto text-lg font-primary text-secondary font-normal">
        10:30 PM
      </p>
    </div>
  );
};

export default ChatList;
