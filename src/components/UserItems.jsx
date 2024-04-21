import React from "react";
const UserItems = ({ userData }) => {
  console.log(userData);
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={userData.profile_picture} alt="user" className="w-full" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          {userData.username}
        </h2>
      </div>
      <button className="ml-auto text-brand font-primary text-xl">
        Add Request
      </button>
    </div>
  );
};

export default UserItems;
