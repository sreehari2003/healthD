import React, { useContext, useEffect } from "react";
import User from "../components/User";
import AuthContext from "../context/authContext";
import { useRouter } from "next/router";
const Index = () => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    if (!ctx.auth) {
      router.push("/");
    }
    console.log(ctx.auth);
  }, [ctx.auth]);
  const router = useRouter();

  const DUMMETDATA = [
    {
      title: "cold",
      description:
        "hari is having a cold fever and can be cured in few days take rest",
      date: "1-2-2021",
    },
    {
      title: "eye pain",
      description:
        "hari is having a mild pain in eyes be cured in few days take rest",
      date: "1-2-2021",
    },
    {
      title: "stomachache",
      description:
        "hari is having a mild stamachAche and can be cured in few days take rest",
      date: "1-2-2021",
    },
  ];
  return <User data={DUMMETDATA} />;
};

export default Index;
