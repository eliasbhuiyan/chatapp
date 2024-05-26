import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { loggeduser } from "../slice/userSlice";
const Navbar = () => {
  const user = useSelector((state) => state.userSlice.user);
  const location = useLocation().pathname;
  const disptch = useDispatch();
  const handelLogout = () => {
    localStorage.removeItem("user");
    disptch(loggeduser(null));
    window.location.reload();
  };
  return (
    <nav className="w-64 bg-white h-screen pl-6 py-6 shadow-[6px_0px_10px_-7px_rgba(0,0,0,0.62)] flex flex-col justify-between">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <ul className="navItems">
          <li>
            <Link
              to="/"
              className={`${
                location == "/" && "bg-brand text-white"
              } flex items-center gap-3 py-3 px-3  rounded-lg w-fit`}
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className={`${
                location == "/chat" && "bg-brand text-white"
              } flex items-center gap-3 py-3 px-3 rounded-lg  w-fit`}
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
        </ul>
      </div>
      <div>
        <Link
          to="/profile"
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
            <p className="text-secondary font-medium text-lg">Edit Profile</p>
          </div>
        </Link>
        <button
          onClick={handelLogout}
          className="py-3 px-3 rounded-lg  w-fit bg-brand text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
