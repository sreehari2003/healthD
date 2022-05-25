import React from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const img =
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387";

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <div className="w-[50%]">
        <Image src={img} alt="" height={722} width={765} />
      </div>
      <div className="w-[50%] bg-black flex items-center justify-center">
        <div className="h-[80%] w-[60%] bg-white rounded-xl mb-[15%] flex items-center justify-center    flex-col">
          <h2 className="text-[35px] font-bold mb-1">Sign Up</h2>
          <form className="h-[380px] flex  items-center justify-center">
            <div className="flex flex-col w-[300px] justify-center items-center">
              <div className=" h-[90px]">
                <label className="font-medium ">Email address </label>
                <TextField
                  id="outlined-basic"
                  label="jhondoe@gmail.com"
                  variant="outlined"
                  className="w-full"
                />
              </div>
              <div className=" h-[90px]">
                <label className="font-medium ">Password </label>
                <TextField
                  id="outlined-basic"
                  label="password"
                  variant="outlined"
                  className="w-full"
                  type="password"
                />
              </div>
              <Button variant="contained" className="bg-black w-[300px] mt-4">
                Contained
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
