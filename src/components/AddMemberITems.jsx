import React from "react";
import { useSelector } from "react-redux";
import { getDatabase, push, ref, set } from "firebase/database";

const AddMemberITems = ({ name, avatar, id, groupData }) => {
  const activeFriend = useSelector((state) => state.activeFriend.friend);
  const db = getDatabase();

  const handelAddMember = () => {
    set(push(ref(db, "groupMember")), {
      gorupID: groupData.id,
      memberName: name,
      memberID: id,
    });
  };
  return (
    <div className="flex items-center gap-4 my-4 cursor-pointer">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
        <img className="w-full" src={avatar} alt="profile" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold text-brand">{name}</h2>
      </div>
      <button
        onClick={handelAddMember}
        className="ml-auto bg-green-400 text-white px-2 rounded cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default AddMemberITems;
