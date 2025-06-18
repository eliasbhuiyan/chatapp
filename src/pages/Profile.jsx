import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { FaEdit, FaUpload } from "react-icons/fa";
import { loggedUser } from "../store/slices/authSlice";
const Profile = () => {
  const auth = getAuth();
  const userInfo = useSelector((state) => state.userData.user);
  const [editable, setEditable] = useState(false);
  const [editData, setEditData] = useState({
    avatar: "",
    fullName: "",
  });
  const dispatch = useDispatch();
  const handelUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: editData.fullName || auth.currentUser.displayName,
    })
      .then(() => {
        dispatch(loggedUser(auth.currentUser));
        setEditable(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="h-screen flex items-center justify-center w-full">
      <div className="card relative">
        <button onClick={() => setEditable(true)} className="cursor-pointer">
          <FaEdit className="text-xl text-white absolute top-0 right-0" />
        </button>
        <div className="profileImage">
          <img src={userInfo.photoURL} alt="profile" />
        </div>
        <div className="textContainer">
          <p className="name">{userInfo.displayName}</p>
          <p className="profile">{userInfo.email}</p>
        </div>
      </div>
      {editable && (
        <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-[#0000003e]">
          <div className=" flex flex-col items-center bg-brand p-8 rounded">
            <input
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              type="text"
              placeholder="Edit Your Name"
              className="border rounded-lg px-3 py-2 mt-5 mb-5 text-sm w-full text-white"
            />
            <div className="flex gap-5 justify-center mt-10">
              <button
                onClick={handelUpdate}
                className="py-2 px-3 bg-green-400 rounded text-white cursor-pointer"
              >
                Update
              </button>
              <button
                onClick={() => setEditable(false)}
                className="py-2 px-3 bg-red-400 rounded text-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
