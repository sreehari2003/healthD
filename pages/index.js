import react from "react";
import Login from "../components/Login";

const Index = () => {
  const img =
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387";
  return (
    <>
      <Login
        URL={"http://localhost:3000/api/users"}
        tex={"Sign in"}
        ima={img}
      />
    </>
  );
};

export default Index;
