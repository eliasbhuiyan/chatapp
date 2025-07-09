import React, { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const UserItem = ({ data }) => {
  const userInfo = useSelector((state) => state.userData.user);
  const [friendList, setFriendList] = useState([]);
  const db = getDatabase();
  const handelAdd = () => {
    set(push(ref(db, "friendList")), {
      creatorName: userInfo.displayName,
      creatorID: userInfo.uid,
      creatorAvatar: userInfo.photoURL,
      participentName: data.username,
      participentID: data.id,
      participentAvatar: data.profile_picture,
      lastMessage: "",
    });
  };

  useEffect(() => {
    onValue(ref(db, "friendList"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().creatorID + item.val().participentID);
      });
      setFriendList(arr);
    });
  }, []);

  return (
    <div className="flex items-center gap-4 my-4">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
        <img className="w-full" src={data.profile_picture} alt="profile" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold text-brand">{data.username}</h2>
      </div>
      {friendList.includes(data.id + userInfo.uid) ||
      friendList.includes(userInfo.uid + data.id) ? (
        <p className="ml-auto text-brand font-semibold">Friend</p>
      ) : (
        <button
          onClick={handelAdd}
          className="ml-auto bg-green-400 text-white px-2 rounded cursor-pointer"
        >
          Add
        </button>
      )}
    </div>
  );
};

export default UserItem;
