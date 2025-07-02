import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const GroupChatList = () => {
  const [modal, setModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  return (
    <div className="p-4 shadow-xl h-screen overflow-hidden w-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-brand">Chat With Groups</h3>
        <button
          onClick={() => setModal(true)}
          className="py-1 px-3 border border-brand rounded-lg font-semibold text-brand"
        >
          Create new
        </button>
        <button
          onClick={() => setJoinModal(true)}
          className="py-1 px-3 border border-brand rounded-lg font-semibold text-brand"
        >
          Join
        </button>
      </div>
      <div className="mt-5 flex items-center gap-2 p-1 rounded-xl border border-secondary">
        <FaSearch />
        <input className="outline-0" type="text" placeholder="Search" />
      </div>

      <div className="mt-10 h-8/10 overflow-y-auto">
        {/* <ChatITems />
        <ChatITems />
        <ChatITems />
        <ChatITems />
        <ChatITems />
        <ChatITems />
        <ChatITems /> */}
      </div>
      {modal && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-10 bg-[#0000003e]">
          <div className="bg-white p-5 rounded-xl">
            <button
              onClick={() => setModal(false)}
              className="text-xl font-bold"
            >
              X
            </button>
            <div className="h-20 w-sm flex flex-col items-center justify-center gap-2">
              <div className="mt-5 flex items-center gap-2 p-1 rounded-xl border border-secondary">
                <input
                  className="outline-0"
                  type="text"
                  placeholder="Group Name"
                />
              </div>
              <button className="px-4 py-2 bg-green-400 text-white rounded-2xl">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      {joinModal && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-10 bg-[#0000003e]">
          <div className="bg-white p-5 rounded-xl">
            <button
              onClick={() => setJoinModal(false)}
              className="text-xl font-bold"
            >
              X
            </button>
            <div className="h-96 w-sm overflow-y-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupChatList;
