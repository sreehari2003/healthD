import React from "react";
import MuiCard from "./Card";
const User = ({ data }) => {
  return (
    <div className=" bg-white">
      <div className="h-screen p-10 w-[100%] bg-[#2a9d8f] flex">
        <MuiCard data={data} />
      </div>
    </div>
  );
};

export default User;
