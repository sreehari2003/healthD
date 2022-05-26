import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Index = () => {
  return (
    <div className="h-screen w-fill flex items-center justify-center bg-[#2a9d8f] overflow-x-hidden flex-col">
      <h1 className="text-[40px] text-white">User Data</h1>
      <div className="w-[600px] flex flex-col bg-white p-4 rounded-xl shadow-xl">
        <h2 className="mb-2">Title</h2>
        <TextField id="outlined-basic" label="fever" variant="outlined" />
        <h2 className="mb-2">Patient Email</h2>
        <TextField id="outlined-basic" label="fever" variant="outlined" />
        <h2 className="mb-2">Description</h2>
        <TextField
          placeholder="Enter the patients description"
          multiline
          rows={10}
          maxRows={4}
        />
        <Button variant="contained" className="bg-black hover:bg-black mt-4">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Index;
