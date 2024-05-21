import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import GroupItems from "./GroupItems";
import Title from "./Title";
import { getDatabase, onValue, ref } from "firebase/database";

const Group = () => {
  const db = getDatabase();
  const [groupList, setGroupList] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "group/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });
      setGroupList(arr);
    });
  }, []);
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg overflow-hidden">
      <Title title="Group" />
      <div className="py-2 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-2">
        <FaSearch />
        <input
          type="text"
          className="w-full outline-none text-lg"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5 overflow-y-scroll h-full">
        {groupList.map((item) => (
          <GroupItems key={item.key} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Group;
