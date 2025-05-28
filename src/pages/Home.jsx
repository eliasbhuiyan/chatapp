import React from "react";
import ChatList from "../components/ChatList";
import { IoSend } from "react-icons/io5";
import { FaFaceSmile } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex w-full">
      <ChatList />
      <div className="w-full bg-slate-50 h-screen">
        {/* <p className="text-secondary text-center">
          Select a chat or start a new conversation
        </p> */}
        <div className="chat_head p-5 bg-white flex items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
            <img className="w-full" src="/profile.png" alt="profile" />
          </div>
          <h2 className="text-lg font-semibold text-brand">User Name</h2>
        </div>
        <div className="m-6 relative chat_body overflow-y-auto">
          {/* Messages Body part */}
          <div className="flex flex-col gap-5 pb-10">
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
            {/* Reciver Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut.
            </p>
            {/* Sender Message */}
            <p className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          {/* Message Input box */}
          <div className="sticky bottom-0 left-0 w-full bg-slate-50 mt-auto chatinputbox">
            <div className="bg-white rounded-xl p-4 flex gap-4">
              <input
                className="w-full outline-0"
                type="text"
                placeholder="Text Here"
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
      </div>
    </div>
  );
};

export default Home;
