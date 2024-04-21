import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import UserItems from "./UserItems";
import Title from "./Title";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";
const Users = () => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const starCountRef = ref(db, "user/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key !== user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
        setUserList(arr);
        setLoading(false);
      });
    });
  }, []);
  console.log("user list", userList);
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg">
      <Title title="Users" />
      <div className="py-2 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-2">
        <FaSearch />
        <input
          type="text"
          className="w-full outline-none text-lg"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {loading ? (
          <p>Loading Data...</p>
        ) : (
          userList.map((item) => <UserItems userData={item} key={item.key} />)
        )}
      </div>
    </div>
  );
};

export default Users;
