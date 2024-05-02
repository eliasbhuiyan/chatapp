import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import FrndRequestItems from "./FrndRequestItems";
import Title from "./Title";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";
const FriendRequest = () => {
  const user = useSelector((state) => state.userSlice.user);
  const db = getDatabase();
  const [friendRequestList, setFriendRequestList] = useState([]);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().reciverId == user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setFriendRequestList(arr);
    });
  }, []);

  useEffect(() => {
    const starCountRef = ref(db, "user/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
        setUserList(arr);
      });
    });
  }, []);
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg">
      <Title title="Friend Request" />
      <div className="py-2 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-2">
        <FaSearch />
        <input
          type="text"
          className="w-full outline-none text-lg"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {friendRequestList.map((reqId) =>
          userList.map(
            (item) =>
              reqId.senderId == item.key && (
                <FrndRequestItems key={item.key} reqList={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default FriendRequest;
