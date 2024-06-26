import BlockList from "../components/BlockList";
import FriendRequest from "../components/FriendRequest";
import Friends from "../components/Friends";
import Group from "../components/Groups";
import MyGroup from "../components/MyGroup";
import Users from "../components/Users";

const Home = () => {
  return (
    <div className="bg-slate-100 w-full py-12 px-6 h-screen">
      <div className="flex gap-6 h-1/2">
        <MyGroup />
        <Group />
        <Friends />
      </div>
      <div className="flex gap-6 mt-8 h-1/2">
        <Users />
        <FriendRequest />
        <BlockList />
      </div>
    </div>
  );
};

export default Home;
