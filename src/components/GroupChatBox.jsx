import React from "react";
import { IoSend } from "react-icons/io5";
import { FaFaceSmile } from "react-icons/fa6";

const GroupChatBox = () => {
  return (
    <div className="w-full bg-slate-50 h-screen">
      {/* Chat Header */}
      <div className="w-full chat_head p-5 bg-white flex items-center justify-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
          <img
            className="w-full"
            src="https://via.placeholder.com/40"
            alt="profile"
          />
        </div>
        <h2 className="text-lg font-semibold text-brand">Friend Name</h2>
      </div>

      {/* Chat Messages */}
      <div className="w-full px-6 relative chat_body overflow-y-auto">
        <div className="flex flex-col gap-5 pb-10">
          {/* Sent message */}
          <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
            Hello, how are you?
          </p>

          {/* Received message */}
          <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
            I'm good! You?
          </p>
        </div>
      </div>

      {/* Chat Input */}
      <div className="w-full bg-slate-50 px-5">
        <div className="bg-white rounded-xl p-4 flex gap-4 chatinputbox">
          <input
            className="w-full outline-0"
            type="text"
            placeholder="Text Here"
            readOnly
          />
          <button className="text-xl text-brand cursor-pointer">
            <FaFaceSmile />
          </button>
          <button className="text-xl text-brand cursor-pointer">
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupChatBox;
