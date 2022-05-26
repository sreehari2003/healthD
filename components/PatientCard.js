import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
const PatientCard = () => {
  const img =
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387";
  return (
    <>
      <div className="h-[210px] w-[25vh] bg-black m-3 rounded-2xl flex items-center justify-center flex-col">
        <Image
          src={img}
          height={140}
          width={175}
          alt=""
          className="w-[200px] rounded-2xl "
        />
        <Button
          variant="contained"
          className="bg-black w-[170px] h-[50px] mt-4 hover:bg-black"
        >
          Info
        </Button>
      </div>
    </>
  );
};

export default PatientCard;
