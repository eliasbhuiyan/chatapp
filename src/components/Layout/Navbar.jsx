import React from "react";
import { FaMessage } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
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
      <Link to="/profile" className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand">
          <img className="w-full" src="/profile.png" alt="profile" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-brand">User Name</h2>
          <p className="text-base font-normal text-secondary">Edit Profile</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
