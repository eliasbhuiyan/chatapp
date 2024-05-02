import React from "react";
import { IoMdMore } from "react-icons/io";
const FrndRequestItems = ({ reqList }) => {
  console.log(reqList);
  return (
    <div className="flex gap-4 items-center">
      <div className="w-12 rounded-full overflow-hidden">
        <img className="w-full" src={reqList?.profile_picture} alt="alt" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          {reqList?.username}
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
