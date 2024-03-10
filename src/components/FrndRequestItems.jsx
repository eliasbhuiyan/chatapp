import React from "react";
import { IoMdMore } from "react-icons/io";
const FrndRequestItems = () => {
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
      <div className="flex flex-col gap-1 ml-auto">
        <button className="font-primary text-sm py-1 px-3 bg-brand text-white rounded-lg w-fit">
          Confirm
        </button>
        <button className="font-primary text-sm py-1 px-4 bg-red-400 text-white rounded-lg w-fit">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FrndRequestItems;
