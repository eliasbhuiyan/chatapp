import React from "react";
import { IoMdMore } from "react-icons/io";
const UserItems = () => {
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
      <button className="ml-auto text-brand font-primary text-xl">
        Add Request
      </button>
    </div>
  );
};

export default UserItems;
