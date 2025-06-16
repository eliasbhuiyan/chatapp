import React from "react";
import { Navigate, Outlet } from "react-router";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Layout = () => {
  const userData = useSelector((state) => state.userData.user);

  if (!userData) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
