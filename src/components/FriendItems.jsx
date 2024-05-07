/* eslint-disable react/prop-types */
import { getDatabase, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";

const FriendItems = ({data}) => {
  const user = useSelector((state) => state.userSlice.user);
  const db = getDatabase();
  const handelUnfriend = (key)=>{
    remove(ref(db, "friends/" + key));
    window.location.reload()
  }
  const handelBlock = (data)=>{
    set(push(ref(db, "block/")), {
      blockById: user.uid,
      blockByName: user.displayName,
      blockByProfile: user.photoURL,
      blockId: data.friendID,
      blockName: data.friendName,
      blockProfile: data.friendImg
    });
    remove(ref(db, "friends/" + data.key));
  }
  return (
    <div className="flex gap-4 items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={data?.friendImg} className="w-full" alt="alt" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          {data?.friendName}
        </h2>
      </div>
      <div className="flex flex-col gap-1 ml-auto">
        <button
        onClick={()=>handelUnfriend(data.key)}
          className="font-primary text-sm py-1 px-3 bg-red-400 text-white rounded-lg w-fit"
        >
          Unfriend
        </button>
        <button
        onClick={()=>handelBlock(data)}
          className="font-primary text-sm py-1 px-4 bg-red-400 text-white rounded-lg w-fit"
        >
          Block
        </button>
      </div>
    </div>
  );
};

export default FriendItems;
