import React from "react";
import Image from "next/image";

const Navbar = ({ mounted, setMounted }) => {
  const img =
    "https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774";
  return (
    <div className="w-[100%] bg-black h-20 flex items-center justify-between p-10">
      <div className="flex justify-center items-cecnter">
        <h2 className="text-[40px] text-white font-serif cursor-pointer">
          HealthD
        </h2>
      </div>
      <div>
        <Image
          src={img}
          alt=""
          className="rounded-full cursor-pointer "
          width={50}
          height={50}
          onClick={() => {
            setMounted(true);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
