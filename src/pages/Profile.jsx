import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.userData.user);
  return (
    <div className="h-screen flex items-center justify-center w-full">
      <div className="card">
        <div className="profileImage">
          <img src={userInfo.photoURL} alt="profile" />
        </div>
        <div className="textContainer">
          <p className="name">{userInfo.displayName}</p>
          <p className="profile">{userInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
