import React from "react";
import { IoMdMore } from "react-icons/io";
const FriendItems = () => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <img src="/user.png" alt="alt" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          Eddie Lake
        </h2>
      </div>
      <button className="ml-auto">
        <IoMdMore />
      </button>
    </div>
  );
};

export default FriendItems;
