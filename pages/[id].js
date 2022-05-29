import React, { useContext, useEffect } from "react";
import User from "../components/User";
import AuthContext from "../context/authContext";
import { useRouter } from "next/router";
const Index = () => {
  const ctx = useContext(AuthContext);

  const DUMMETDATA = [
    {
      title: "cold",
      description:
        "hari is having a cold fever and can be cured in few days take rest",
      date: "1-2-2021",
      img: "https://images.unsplash.com/photo-1607583449928-4ab0cb473e6a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmV2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
    },
    {
      title: "eye pain",
      description:
        "hari is having a mild pain in eyes be cured in few days take rest",
      date: "1-2-2021",
      img: "https://media.istockphoto.com/photos/gazing-at-a-screen-is-a-frequent-eyestrain-culprit-picture-id1127520652?b=1&k=20&m=1127520652&s=170667a&w=0&h=aoN3SXgJjEvuB-8e36wGqMdrJflWtnjmUHAjP9kOmVM=",
    },
    {
      title: "stomachache",
      description:
        "hari is having a mild stamachAche and can be cured in few days take rest",
      date: "1-2-2021",
      img: "https://media.istockphoto.com/photos/man-suffers-from-abdominal-pain-while-sitting-at-home-on-the-couch-picture-id1314592024?b=1&k=20&m=1314592024&s=170667a&w=0&h=m2G7ij7iMw3CDW04iqS9axKLVSlCPT7BgujSZxcm5Dw=",
    },
  ];
  return <User data={DUMMETDATA} />;
};

export default Index;
