import React from "react";
import Login from "../../components/Login";
const index = () => {
  const img =
    "https://images.unsplash.com/photo-1550831107-1553da8c8464?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387";
  return (
    <Login
      URL={"http://localhost:3000/api/doc"}
      tex={"sign in as Doctor"}
      ima={img}
    />
  );
};

export default index;
