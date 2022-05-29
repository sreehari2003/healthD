import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { getAuth, signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import AuthContext from "../context/authContext";
import { useRouter } from "next/router";
const Navbar = ({ setMounted }) => {
  const { push } = useRouter();
  const { auth } = useContext(AuthContext);
  const out = () => {
    const auther = getAuth();
    signOut(auther)
      .then((rs) => {})
      .catch((error) => {});
  };
  const Logout = () => (
    <Button variant="contained" onClick={out} className="bg-red-400 p-3 h-10">
      Logout
    </Button>
  );
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  const img =
    "https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774";
  return (
    <div className="w-[100%] bg-black h-20 flex items-center justify-between px-14">
      <div className="flex justify-center items-cecnter">
        <h2
          className="text-[40px] text-white  cursor-pointer font-mono"
          onClick={() => push("/")}
        >
          HealthD
        </h2>
      </div>
      <>
        {auth && (
          <div className="flex justify-between  px-4 items-center w-[200px] ">
            <Logout />
            <Image
              src={img}
              alt=""
              className="rounded-full cursor-pointer mr-6"
              width={50}
              height={50}
              onClick={() => {
                setMounted(true);
              }}
            />
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
