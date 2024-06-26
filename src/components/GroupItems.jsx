import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
const GroupItems = ({ data, myGroup }) => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [friendList, setFriendList] = useState([]);
  const [groupmemberList, setGroupMemberList] = useState([]);
  const [show, setShow] = useState(false);
  const [showAddmember, setShowAddMember] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const handelClick = () => {
    if (myGroup) {
      setShow(true);
    }
  };
  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().friendId == user.uid) {
          arr.push({
            friendID: item.val().reciverId,
            friendName: item.val().reciverName,
            friendImg: item.val().reciverProfile,
            key: item.key,
          });
        } else if (item.val().reciverId == user.uid) {
          arr.push({
            friendID: item.val().friendId,
            friendName: item.val().friendName,
            friendImg: item.val().friendProfile,
            key: item.key,
          });
        }
      });
      setFriendList(arr);
    });
  }, []);

  const handelAdd = (data, friend) => {
    set(push(ref(db, "groupmembers")), {
      groupName: data.groupName,
      groupId: data.key,
      createBy: data.createBy,
      createByID: data.createByID,
      memberName: friend.friendName,
      memberId: friend.key,
      memberProfile: friend.friendImg,
    });
  };

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "groupmembers/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (data.key == item.val().groupId) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setGroupMemberList(arr);
    });
  }, []);
  console.log(groupmemberList);
  return (
    <div>
      {show && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button className="text-xl" onClick={() => setShow(false)}>
              <MdOutlineCancel />
            </button>
            <br />
            <button
              onClick={() => {
                setShowInfo(true);
                setShow(false);
              }}
              className="title border-b pb-2 mb-2"
            >
              Group Info
            </button>
            <br />
            <button
              onClick={() => {
                setShowAddMember(true);
                setShow(false);
              }}
              className="title border-b pb-2 mb-2"
            >
              Add Friends
            </button>
          </div>
        </div>
      )}
      {showAddmember && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button className="text-xl" onClick={() => setShowAddMember(false)}>
              <MdOutlineCancel />
            </button>
            <p className="title border-b pb-2 mb-2">Add Friends</p>
            {friendList.length > 0 ? (
              friendList.map((item) => (
                <div key={item.key} className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={item?.friendImg} className="w-full" alt="alt" />
                  </div>
                  <div>
                    <h2 className="text-xl font-primary text-primary font-bold">
                      {item?.friendName}
                    </h2>
                  </div>
                  <button
                    onClick={() => handelAdd(data, item)}
                    className="py-2 px-4 bg-brand text-white rounded-xl"
                  >
                    Add
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center">No Friend Available</p>
            )}
          </div>
        </div>
      )}
      {showInfo && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button className="text-xl" onClick={() => setShowInfo(false)}>
              <MdOutlineCancel />
            </button>
            <p className="title border-b pb-2 mb-2">{data?.groupName}</p>
            {groupmemberList.length > 0 ? (
              groupmemberList.map((item) => (
                <div key={item.key} className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={item?.memberProfile}
                      className="w-full"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-primary text-primary font-bold">
                      {item?.memberName}
                    </h2>
                  </div>
                  <button className="py-2 px-4 bg-brand text-white rounded-xl">
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center">No Member Available</p>
            )}
          </div>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <div>
          <img src="/user.png" alt="alt" />
        </div>
        <div>
          <h2 className="text-xl font-primary text-primary font-bold">
            {data?.groupName}
          </h2>
          <p className="text-lg font-primary text-secondary font-normal">
            Admin: {data?.createBy}
          </p>
        </div>
        <IoMdMore onClick={handelClick} className="ml-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default GroupItems;
