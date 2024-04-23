import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector((state) => state.userSlice.user);
  console.log(user);
  return (
    <nav className="w-64 bg-white h-screen pl-6 pt-6 shadow-[6px_0px_10px_-7px_rgba(0,0,0,0.62)]">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <ul className="navItems">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 py-3 px-3 bg-brand text-white rounded-lg w-fit"
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className="flex items-center gap-3 py-3 px-3 rounded-lg  w-fit"
            >
              <IoChatbox />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className="flex items-center gap-3 py-3 px-3 rounded-lg  w-fit"
            >
              <IoChatbox />
              <span>Group</span>
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className="flex items-center gap-3 py-3 px-3 rounded-lg  w-fit"
            >
              <img
                src={user?.photoURL}
                alt="user"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-brand font-semibold text-xl">
                  {user?.displayName}
                </p>
                <p className="text-secondary font-medium text-lg">
                  Edit Profile
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
