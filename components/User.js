import React from "react";
import MuiCard from "./Card";
const User = ({ data }) => {
  return (
    <div className=" bg-white">
      <div className="min-h-screen p-10 w-[100%] bg-[#2a9d8f] flex j items-center flex-col">
        <h1 className="text-center text-[40px] mt-5 text-white">
          Medical History
        </h1>
        <MuiCard data={data} />
      </div>
    </div>
  );
};

export default User;
