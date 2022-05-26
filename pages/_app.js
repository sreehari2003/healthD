import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "../context/authContext";
import Modal, { modal } from "../model/model";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  const getState = (fun) => {
    fun(true);
  };
  return (
    <>
      <AuthContextProvider>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar
          mounted={mounted}
          setMounted={setMounted}
          changeMod={getState}
        />
        <Modal mounted={mounted} setMounted={setMounted} changeMod={getState} />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
