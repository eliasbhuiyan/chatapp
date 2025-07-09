import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ChatITems from "./ChatITems";
import { useSelector } from "react-redux";
import UserItems from "./UserItems";

const ChatList = () => {
  const [modal, setModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [friendList, setFriendList] = useState([]);

  const db = getDatabase();
  const userInfo = useSelector((state) => state.userData.user);

  useEffect(() => {
    let arr = [];
    onValue(ref(db, "users/"), (snapshot) => {
      snapshot.forEach((items) => {
        if (items.key !== userInfo.uid) {
          arr.push({ ...items.val(), id: items.key });
        }
      });
      setUserList(arr);
    });
  }, []);
  useEffect(() => {
    onValue(ref(db, "friendList"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          item.val().creatorID === userInfo.uid ||
          item.val().participentID === userInfo.uid
        ) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendList(arr);
    });
  }, []);

  return (
    <div className="p-4 shadow-xl h-screen overflow-hidden w-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-brand">Chat With Friends</h3>
        <button
          onClick={() => setModal(true)}
          className="py-1 px-3 border border-brand rounded-lg font-semibold text-brand cursor-pointer"
        >
          Add
        </button>
      </div>
      <div className="mt-5 flex items-center gap-2 p-1 rounded-xl border border-secondary">
        <FaSearch />
        <input className="outline-0" type="text" placeholder="Search" />
      </div>
      <div className="mt-10 h-8/10 overflow-y-auto">
        {friendList.map((item) =>
          item.creatorID == userInfo.uid ? (
            <ChatITems
              key={item.id}
              conVoID={item.id}
              name={item.participentName}
              avatar={item.participentAvatar}
              id={item.participentID}
              lastMessage={item.lastMessage}
            />
          ) : (
            <ChatITems
              key={item.id}
              conVoID={item.id}
              name={item.creatorName}
              avatar={item.creatorAvatar}
              id={item.creatorID}
              lastMessage={item.lastMessage}
            />
          )
        )}
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
            <div className="mt-5 flex items-center gap-2 p-1 rounded-xl border border-secondary">
              <FaSearch />
              <input className="outline-0" type="text" placeholder="Search" />
            </div>
            <div className="h-96 w-sm overflow-y-auto">
              {userList.map((item) => (
                <UserItems key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
