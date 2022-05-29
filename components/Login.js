import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../auth/Firebase";
import { notifyMessage } from "../helper/toast";
import { useRouter } from "next/router";
const Login = ({ tex, ima, fun }) => {
  const google = "https://blog.hubspot.com/hubfs/image8-2.jpg";
  const router = useRouter();
  const rt = tex.includes("Doctor") ? "patient" : "doctor";
  const nav = tex.includes("Doctor") ? "/" : "doctor";

  const auth = () => {
    //fiebase login code
    const provider = new GoogleAuthProvider();

    const getAuth = async () => {
      try {
        const res = await signInWithPopup(authentication, provider);
        const data = res.user;
        if (!data) {
          throw new Error("Couldnt signin");
        }
        // console.log(data);
        const query = {
          name: data.displayName,
          email: data.email,
          image: data.photoURL,
        };
        localStorage.setItem("name", data.displayName);
        localStorage.setItem("email", data.email);
        fun(query);
      } catch (e) {
        console.log(e);
        notifyMessage("Couldn't sign in");
      }
    };
    getAuth();
  };

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      <div className="w-[50%] bg-black flex items-center justify-center h-[600px]">
        <Image
          src={ima}
          alt=""
          height={600}
          width={600}
          className="rounded-lg"
        />
      </div>
      <div className="w-[50%] bg-black flex items-center justify-center">
        <div className="h-[80%] w-[60%] bg-white rounded-xl mb-[15%] flex items-center justify-center    flex-col">
          <h2 className="text-[35px] font-bold mb-1">{tex}</h2>
          <form className="h-[380px] flex  items-center justify-center">
            <div className="flex flex-col w-[300px] justify-center items-center">
              <Image
                src={google}
                height={50}
                width={100}
                alt="google symbol"
                className="mb-5"
              />
              <Button
                variant="contained"
                className="bg-black w-[300px] h-[50px] mt-4"
                onClick={auth}
              >
                Continue with Google
              </Button>
              <h5
                className="text-sm underline hover:cursor-pointer mt-3 "
                onClick={() => router.push(`${nav}`)}
              >
                signup as as {rt}
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
