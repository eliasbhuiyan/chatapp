import { FaSearch } from "react-icons/fa";
import GroupItems from "./GroupItems";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
const MyGroup = () => {
  const user = useSelector((state) => state.userSlice.user);
  const [show, setShow] = useState(false);
  const db = getDatabase();
  const [groupName, setGroupName] = useState("");
  const [nameError, setNameError] = useState("");
  const [groupList, setGroupList] = useState([]);
  const handelCreate = () => {
    if (!groupName) {
      setNameError("Enter a group name!");
    } else {
      set(push(ref(db, "group/")), {
        groupName: groupName,
        createBy: user.displayName,
        createByID: user.uid,
      }).then(() => {
        setShow(false);
        setGroupName("");
      });
    }
  };
  const handelClose = () => {
    setShow(false);
    setGroupName("");
  };

  useEffect(() => {
    const starCountRef = ref(db, "group/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().createByID == user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setGroupList(arr);
    });
  }, []);
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg relative">
      <div className="flex justify-between pb-4">
        <h2 className="title">My Group</h2>
        <button onClick={() => setShow(true)}>
          <FaPen className="text-lg" />
        </button>
      </div>
      <div className="py-2 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-2">
        <FaSearch />
        <input
          type="text"
          className="w-full outline-none text-lg"
          placeholder="Search"
        />
      </div>
      {show && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button className="text-xl" onClick={handelClose}>
              <MdOutlineCancel />
            </button>
            <p className="title border-b pb-2 mb-2">Creacte New Group</p>
            <label className="text-xl font-primary text-primary font-bold">
              Group Name
            </label>
            <input
              onChange={(e) => setGroupName(e.target.value)}
              type="text"
              placeholder="Group Name"
              className="border block px-3 py-2"
            />
            <p className="text-red-500">{nameError}</p>
            <button
              onClick={handelCreate}
              className="py-2 px-4 bg-brand text-white font-semibold rounded-xl mt-4"
            >
              Create
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 mt-5">
        {groupList.map((item) => (
          <GroupItems key={item.key} data={item} myGroup={true} />
        ))}
      </div>
    </div>
  );
};

export default MyGroup;
