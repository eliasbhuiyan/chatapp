import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { FaFaceSmile } from "react-icons/fa6";
import { useSelector } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";
import EmojiPicker from "emoji-picker-react";

const ChatBox = () => {
  const chatboxRef = useRef(null);
  const [emoji, setEmoji] = useState(false);
  const [chatContent, setChatContent] = useState("");
  const [messages, setMessages] = useState([]);
  const activeFriend = useSelector((state) => state.activeFriend.friend);
  const userInfo = useSelector((state) => state.userData.user);
  const db = getDatabase();
  const handelSendMessage = () => {
    set(push(ref(db, "messages/")), {
      senderID: userInfo.uid,
      reciverID: activeFriend.id,
      message: chatContent,
    });

    update(ref(db, "friendList/" + activeFriend.conVoID), {
      lastMessage: chatContent,
    });
    setChatContent("");
    setEmoji(false);
  };
  useEffect(() => {
    onValue(ref(db, "messages"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          (item.val().reciverID === userInfo.uid ||
            item.val().senderID === userInfo.uid) &
          (item.val().reciverID === activeFriend.id ||
            item.val().senderID === activeFriend.id)
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setMessages(arr);
    });
  }, [activeFriend]);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="w-full bg-slate-50 h-screen">
      <div className="w-full chat_head p-5 bg-white flex items-center justify-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
          <img className="w-full" src={activeFriend.avatar} alt="profile" />
        </div>
        <h2 className="text-lg font-semibold text-brand">
          {activeFriend.name}
        </h2>
      </div>
      <div
        ref={chatboxRef}
        className="w-full px-6 relative chat_body overflow-y-auto"
      >
        {/* Messages Body part */}
        <div className="flex flex-col gap-5 pb-10">
          {messages.map((item) =>
            item.senderID === userInfo.uid ? (
              <p
                key={item.key}
                className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5"
              >
                {item.message}
              </p>
            ) : (
              <p
                key={item.key}
                className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5"
              >
                {item.message}
              </p>
            )
          )}
        </div>
        {/* Message Input box */}
      </div>
      <div className=" w-full bg-slate-50 px-5 ">
        <div className="bg-white rounded-xl p-4 flex gap-4 chatinputbox">
          <input
            className="w-full outline-0"
            type="text"
            placeholder="Text Here"
            onChange={(e) => setChatContent(e.target.value)}
            value={chatContent}
          />
          <button
            onClick={() => setEmoji(!emoji)}
            className="text-xl text-brand cursor-pointer"
          >
            <FaFaceSmile />
          </button>
          <button
            onClick={handelSendMessage}
            disabled={!chatContent}
            className="text-xl text-brand cursor-pointer"
          >
            <IoSend />
          </button>
        </div>
        {emoji && (
          <EmojiPicker
            emojiStyle="facebook"
            onEmojiClick={(i) => setChatContent((prev) => prev + i.emoji)}
          />
        )}
      </div>
    </div>
  );
};

export default ChatBox;
