import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const friend = useSelector(
    (action) => action.currentChatFriendInfo.friendInfo
  );
  const [chat, setChat] = useState("");
  console.log(chat);
  return (
    <div className="chatbox w-3/5 pb-4 mx-8 mt-8">
      <div className="flex p-3 gap-4 items-center border-b">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={friend?.friendImg} className="w-full" alt="alt" />
        </div>
        <div>
          <h2 className="text-xl font-primary text-white font-bold">
            {friend?.friendName}
          </h2>
        </div>
      </div>
      <div className="h-full px-4 overflow-y-scroll">
        {/* sender box */}
        <div className="my-2 max-w-[60%] w-fit rounded-xl rounded-br-sm py-2 px-3 bg-white text-primary ml-auto">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {/* Reciver box */}
        <div className="my-2 max-w-[60%] w-fit rounded-xl rounded-bl-sm py-2 px-3 bg-white text-primary">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="sender-area ">
        <div className="input-place w-full mr-3 flex justify-between">
          <input
            onChange={(e) => setChat(e.target.value)}
            placeholder="Send a message."
            className="send-input w-full"
            type="text"
          />
          <div className="send">
            <IoSend className="text-white" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ChatBox;
