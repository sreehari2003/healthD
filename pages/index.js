import react from "react";
import axios from "axios";
import Login from "../components/Login";
import { useRouter } from "next/router";
import { notifyMessage } from "../helper/toast";

const Index = () => {
  const router = useRouter();
  const POST_URL = "http://localhost:3000/api/users";
  const sendDB = async (obj) => {
    try {
      const { data } = await axios.post(POST_URL, obj);
      notifyMessage("sign in succesfull");
      router.push(`/${obj.name}`);
      if (!data) {
        throw new Error("COuldnt sign in");
        // notifyMessage("couldnt sign in");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const img =
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387";
  return (
    <>
      <Login fun={sendDB} tex={"Sign in"} ima={img} />
    </>
  );
};

export default Index;
