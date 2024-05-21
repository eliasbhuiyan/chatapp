import { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatList from "../components/ChatList";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";
const Chat = () => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [friendList, setFriendList] = useState([]);
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
  return (
    <div className="flex h-screen w-full">
      <div className="h-full bg-slate-100 flex flex-col gap-4 p-5 w-2/5">
        <h2 className="title pb-4 border-b">Friends Chat</h2>
        {friendList.length > 0 ? (
          friendList.map((item) => <ChatList key={item.key} data={item} />)
        ) : (
          <p className="text-center">No Friend Available</p>
        )}
      </div>
      <ChatBox />
    </div>
  );
};

export default Chat;
