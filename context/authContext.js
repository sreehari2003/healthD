import React, { useState, useEffect, createContext, useCallback } from "react";
import { useRouter } from "next/router";
const AuthContext = createContext({
  auth: false,
  removeAuth: () => {},
  getAuth: () => {},
  setModal: () => {},
  removeModal: () => {},
});

export const AuthContextProvider = (props) => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [modal, showModal] = useState(true);

  useEffect(() => {
    let cook = localStorage.getItem("email");
    if (cook) {
      getAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getAuth = useCallback(() => {
    setAuth(true);
  }, [setAuth]);

  const setModal = () => {
    showModal(true);
  };
  const removeAuth = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    router.replace("/login");
    setAuth(false);
  };
  const removeModal = () => {
    showModal(false);
  };

  const contextValue = {
    auth,
    removeAuth,
    getAuth,
    setModal,
    removeModal,
    modal,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
