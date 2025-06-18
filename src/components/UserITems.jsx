import React from "react";

const UserItems = ({ data }) => {
  return (
    <div className="flex items-center gap-4 my-4">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
        <img className="w-full" src={data.profile_picture} alt="profile" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold text-brand">{data.username}</h2>
      </div>
      <button className="ml-auto bg-green-400 text-white px-2 rounded cursor-pointer">
        Add
      </button>
    </div>
  );
};

export default UserItems;
