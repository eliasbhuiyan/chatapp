/* eslint-disable react/prop-types */
import {
  getDatabase,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";

const FrndRequestItems = ({ reqList, frReqId }) => {
  const user = useSelector((state) => state.userSlice.user);
  const db = getDatabase();
  const handelConfirm = (data, id) => {
    set(push(ref(db, "friends/")), {
      friendId: data.key,
      friendName: data.username,
      friendProfile: data.profile_picture,
      reciverId: user.uid,
      reciverName: user.displayName,
      reciverProfile: user.photoURL,
    });
    remove(ref(db, "friendRequest/" + id));
  };

  const handelCancel = (id) => {
    remove(ref(db, "friendRequest/" + id));
  };
  return (
    <div className="flex gap-4 items-center">
      <div className="w-12 rounded-full overflow-hidden">
        <img className="w-full" src={reqList?.profile_picture} alt="alt" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          {reqList?.username}
        </h2>
      </div>
      <div className="flex flex-col gap-1 ml-auto">
        <button
          onClick={() => handelConfirm(reqList, frReqId)}
          className="font-primary text-sm py-1 px-3 bg-brand text-white rounded-lg w-fit"
        >
          Confirm
        </button>
        <button
          onClick={() => handelCancel(frReqId)}
          className="font-primary text-sm py-1 px-4 bg-red-400 text-white rounded-lg w-fit"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FrndRequestItems;
