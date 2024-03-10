import React from "react";
import { FaSearch } from "react-icons/fa";
import FriendItems from "./FriendItems";
import Title from "./Title";

const Friends = () => {
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg">
      <Title title="Friends" />
      <div className="py-2 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-2">
        <FaSearch />
        <input
          type="text"
          className="w-full outline-none text-lg"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <FriendItems />
        <FriendItems />
        <FriendItems />
        <FriendItems />
      </div>
    </div>
  );
};

export default Friends;
