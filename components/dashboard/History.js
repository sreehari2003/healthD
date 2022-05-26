import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GrAdd } from "react-icons/gr";
import PatientCard from "../PatientCard";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { db } from "../../auth/Firebase";
import { addDoc, doc, getDoc, getCollection } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { images } from "./constants/dummydata";
const History = () => {
  const [msg, setMsg] = useState([]);
  const sendData = async (txt) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        msg: txt,
        date: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const text = useRef();
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "messages"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let arr = [];
        console.log(doc.data());
        arr.push(doc.data());
        setMsg(arr);
        console.log(msg);
      });
    }
    getData();
  }, []);

  const router = useRouter();

  const onClick = (e) => {
    e.preventDefault();
    (async () => {
      const inputText = text.current.value;
      sendData(inputText);
      text.current.value = "";
      //send the text to the firestore
    })();
  };
  return (
    <div className="h-screen bg-black pl-10 pr-10 flex justify-center overflow-x-hidden">
      {/* comment section */}
      <div className="w-[400px] bg-white h-[85vh]  rounded-2xl flex flex-col align-center justify-between">
        <div className="overflow-y-scroll p-6 flex  flex-col place-items-end">
          {msg.map((el, index) => {
            return <h5 key={index}>{el.msg}</h5>;
          })}
        </div>
        <div className="h-[60px]  flex  justify-around items-center">
          <TextField
            id="outlined-basic"
            label="enter messege"
            variant="outlined"
            className="w-[450px]"
            inputRef={text}
          />
          <Button
            variant="contained"
            className="bg-black h-[80px] hover:bg-black mt-4"
            onClick={onClick}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="w-[700px] bg-[#2a9d8f] h-[85vh] rounded-r-xl">
        <h3 className="text-center text-[35px] text-white">Patients</h3>
        <div className="m-8 flex flex-wrap">
          {images.map((el) => (
            <PatientCard key={el} src={el} />
          ))}
        </div>
        <div
          onClick={() => router.push("/doctor/dashBoard/add")}
          className="rounded-full w-[80px] h-[80px] bg-white     flex justify-center items-center ml-[750px] mb-[300px]"
        >
          <GrAdd className=" text-white text-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default History;
