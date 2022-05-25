import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider} from "../context/authContext";
function MyApp({ Component, pageProps }) {
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
        <Navbar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
