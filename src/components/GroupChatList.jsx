import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
import GroupChatItems from "./GroupChatItems";

const GroupChatList = () => {
  const userInfo = useSelector((state) => state.userData.user);
  const [createGrpModal, setCreateGrpModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [allGroups, setAllGroups] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);
  const db = getDatabase();

  const handelCreateGrp = () => {
    if (!groupName) return alert("Group name is required.");
    set(push(ref(db, "groups/")), {
      groupName,
      creatorName: userInfo.displayName,
      creatorId: userInfo.uid,
    });
    setCreateGrpModal(false);
    setGroupName("");
  };

  useEffect(() => {
    onValue(ref(db, "groupMember"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().memberID === userInfo.uid) {
          arr.push(item.val().gorupID);
        }
      });
      setGroupMembers(arr);
    });
    onValue(ref(db, "groups"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      setAllGroups(arr);
    });
  }, []);

  return (
    <div className="p-4 shadow-xl h-screen overflow-hidden w-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-brand">Chat With Groups</h3>
        <button
          onClick={() => setCreateGrpModal(true)}
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
        {allGroups.map(
          (item) =>
            (item.creatorId === userInfo.uid ||
              groupMembers.includes(item.id)) && (
              <GroupChatItems key={item.id} data={item} />
            )
        )}
      </div>
      {createGrpModal && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-10 bg-[#0000003e]">
          <div className="bg-white p-5 rounded-xl">
            <button
              onClick={() => setCreateGrpModal(false)}
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
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </div>
              <button
                onClick={handelCreateGrp}
                className="px-4 py-2 bg-green-400 text-white rounded-2xl"
              >
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
