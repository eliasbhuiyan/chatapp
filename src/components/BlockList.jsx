import React from "react";
import { FaSearch } from "react-icons/fa";
import BlockItems from "./BlockItems";
import Title from "./Title";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const BlockList = () => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [blockList, setBlockList] = useState([]);
  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "block/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().blockById == user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setBlockList(arr);
    });
  }, []);
  console.log(blockList);
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg">
      <Title title="Block List" />
      <div className="py-2 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-2">
        <FaSearch />
        <input
          type="text"
          className="w-full outline-none text-lg"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {blockList.length > 0 ? (
          blockList.map((item) => <BlockItems key={item.key} data={item} />)
        ) : (
          <p className="text-center">No block list Available</p>
        )}
      </div>
    </div>
  );
};

export default BlockList;
