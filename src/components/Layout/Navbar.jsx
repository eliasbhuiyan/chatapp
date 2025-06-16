import React from "react";
import { FaMessage } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { loggedUser } from "../../store/slices/authSlice";

const Navbar = () => {
  const userData = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  const handelSignout = () => {
    dispatch(loggedUser(null));
  };
  return (
    <nav className="h-screen py-8 px-4 shadow-xl flex flex-col w-xs">
      <h2 className="font-bold text-3xl text-brand">ChatApp</h2>
      <div className="flex flex-col mt-20 gap-2">
        <Link
          className="flex gap-4 items-center py-2 px-4 text-xl rounded-xl bg-brand text-white"
          to="/"
        >
          <FaMessage /> Chat
        </Link>
        <Link
          className="flex gap-4 items-center py-2 px-4 text-brand text-xl rounded-xl"
          to="/group"
        >
          <MdGroup /> Group
        </Link>
      </div>
      <div className="mt-auto flex flex-col gap-6">
        <Link to="/profile" className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
            <img className="w-full" src={userData?.photoURL} alt="profile" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-brand">
              {userData?.displayName}
            </h2>
            <p className="text-base font-normal text-secondary">Edit Profile</p>
          </div>
        </Link>
        <button
          onClick={handelSignout}
          className="py-2 bg-red-500 text-white rounded-xl cursor-pointer"
        >
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
