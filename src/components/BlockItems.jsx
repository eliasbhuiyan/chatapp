import React from "react";
const BlockItems = () => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <img src="/user.png" alt="alt" />
      </div>
      <div>
        <h2 className="text-xl font-primary text-primary font-bold">
          Eddie Lake
        </h2>
      </div>
      <button className="ml-auto text-brand font-primary text-xl">
        Unblock
      </button>
    </div>
  );
};

export default BlockItems;
