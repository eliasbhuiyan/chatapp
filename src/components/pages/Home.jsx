import React from "react";
import BlockList from "../BlockList";
import FriendRequest from "../FriendRequest";
import Friends from "../Friends";
import Group from "../Groups";
import MyGroup from "../MyGroup";
import Users from "../Users";

const Home = () => {
  return (
    <div className="bg-slate-100 w-full py-12 px-6">
      <div className="flex gap-6 ">
        <MyGroup />
        <Group />
        <Friends />
      </div>
      <div className="flex gap-6 mt-8">
        <Users />
        <FriendRequest />
        <BlockList />
      </div>
    </div>
  );
};

export default Home;
