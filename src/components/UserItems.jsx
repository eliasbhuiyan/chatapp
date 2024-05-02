import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const UserItems = ({ userData }) => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [friendRequestList, setFriendRequestList] = useState([]);
  const handelRequest = (key, userName) => {
    console.log(key);
    set(push(ref(db, "friendRequest/")), {
      senderName: user.displayName,
      senderId: user.uid,
      reciverName: userName,
      reciverId: key,
    });
  };

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().senderId == user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setFriendRequestList(arr);
    });
  }, []);

  console.log(friendRequestList);
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={userData.profile_picture} alt="user" className="w-full" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          {userData.username}
        </h2>
      </div>
      {/* {friendRequestList.map((item) => {
        item.reciverId == userData.key ? (
          <button className="ml-auto text-brand font-primary text-xl">
            Cancel
          </button>
        ) : ( */}
      <button
        onClick={() => handelRequest(userData.key, userData.username)}
        className="ml-auto text-brand font-primary text-xl"
      >
        Add Request
      </button>
      {/* );
      })} */}
    </div>
  );
};

export default UserItems;
