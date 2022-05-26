import React from "react";
import PatientCard from "../PatientCard";
const History = () => {
  return (
    <div className="h-screen bg-black pl-10 pr-10 flex justify-center">
      {/* comment section */}
      <div className="w-[400px] bg-white h-[85vh] overflow-y-scroll rounded-2xl"></div>
      <div className="w-[700px] bg-[#2a9d8f] h-[85vh] rounded-r-xl">
        <h3 className="text-center text-[35px] text-white">Patients</h3>
        <div className="m-8 flex flex-wrap">
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </div>
      </div>
    </div>
  );
};

export default History;
