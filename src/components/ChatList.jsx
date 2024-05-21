import { useDispatch } from "react-redux";
import { currentFriendInfo } from "../slice/currentChatFriendInfo";

const ChatList = ({ data }) => {
  const disptch = useDispatch();
  const handelClick = () => {
    disptch(currentFriendInfo(data));
  };
  return (
    <div onClick={handelClick} className="flex gap-4 border-b cursor-pointer">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={data?.friendImg} className="w-full" alt="alt" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          {data.friendName}
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
