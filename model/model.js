import React, { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import classes from "./model.module.scss";
import { createPortal } from "react-dom";
import AuthContext from "../context/authContext";
import { medicine } from "../components/dashboard/constants/dummydata";
const Backdrop = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

const ModalOverlay = () => {
  return (
    <div className={classes.md}>
      <div className={classes.modal}>
        <div className={classes.content}>
          <div className="modalBox">
            <h2 className="mb-5 mt-5">Medicine taken by patient</h2>
            <ul className="md">
              {medicine.map((el, index) => (
                <li key={index} className="p-4 text-2xl">
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ children, getState, mounted, setMounted }) => {
  const ctx = useContext(AuthContext);
  //   const { md, fun } = ctx;
  const changeModal = (bool) => {
    setMounted(bool);
  };
  useEffect(() => {
    // setMounted(true);
    // ctx.setModal();
    // fun(true);
    return () => {
      setMounted(false);
      // ctx.removeModal();
      //   fun(false);
    };
  }, []);
  const Var = (
    <Backdrop onClose={() => setMounted(false)}>
      <ModalOverlay>{children}</ModalOverlay>
    </Backdrop>
  );
  return mounted ? createPortal(Var, document.getElementById("portals")) : null;
};

export default Modal;
