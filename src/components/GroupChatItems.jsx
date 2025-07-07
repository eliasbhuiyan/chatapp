import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import AddMemberITems from "./AddMemberITems";
import { selectGroup } from "../store/slices/convarsationSlice";

const GroupChatItems = ({ data }) => {
  const [addMemberModal, setAddMemberModal] = useState(false);
  const [friendList, setFriendList] = useState([]);
  const userInfo = useSelector((state) => state.userData.user);
  const db = getDatabase();
  const dispatch = useDispatch();
  useEffect(() => {
    onValue(ref(db, "friendList"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          item.val().creatorID === userInfo.uid ||
          item.val().participentID === userInfo.uid
        ) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendList(arr);
    });
  }, []);

  const handelClick = () => {
    dispatch(selectGroup(data));
  };
  return (
    <div
      onClick={handelClick}
      className="flex items-center gap-4 my-4 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full overflow-hidden bg-brand flex items-center justify-center">
        <p className="text-lg font-bold text-white">{data.groupName[0]}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-brand">{data.groupName}</h2>
        <p className="text-base font-normal text-secondary">
          {/* {lastMessage && lastMessage.length > 12
            ? lastMessage.substring(0, 10) + "..."
            : lastMessage} */}
        </p>
      </div>
      <BsThreeDotsVertical
        className="text-base font-normal text-primary ml-auto"
        onClick={() => setAddMemberModal(true)}
      />
      {addMemberModal && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-10 bg-[#0000003e]">
          <div className="bg-white p-5 rounded-xl">
            <button
              onClick={() => setAddMemberModal(false)}
              className="text-xl font-bold"
            >
              X
            </button>
            <div className="h-96 w-sm overflow-y-auto">
              <h3>Add Member in {data.groupName} group</h3>
              <div className="mt-10 h-8/10 overflow-y-auto">
                {friendList.map((item) =>
                  item.creatorID == userInfo.uid ? (
                    <AddMemberITems
                      key={item.id}
                      conVoID={item.id}
                      name={item.participentName}
                      avatar={item.participentAvatar}
                      id={item.participentID}
                      groupData={data}
                    />
                  ) : (
                    <AddMemberITems
                      key={item.id}
                      conVoID={item.id}
                      name={item.creatorName}
                      avatar={item.creatorAvatar}
                      id={item.creatorID}
                      groupData={data}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupChatItems;
