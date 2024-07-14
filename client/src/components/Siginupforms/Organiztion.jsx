import React, { useState } from "react";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";

const Organiztion = () => {

  const [name,setName] = useState("") ; 
  const [Address, setAddress] = useState("") ; 
  const [regno , setregno] = useState("") ; 
  const [mob,setmob] = useState("") ; 
  const [otp,setotp] = useState("");

  


  return (
    <div className="flex justify-center flex-col items-center  ">
      <div className="text-[40px] p-4" >Create An Account</div>
      <div className="justify-center items-center w-[800px]" >
        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border" >
          <label className="text-[24px]" >Organization Name :</label>
          <input
            value={name}
            onChange={ (e) => {
              setName(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the name of the organiztion"
          />
        </div>

        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Organization Address :</label>
          <input
            value={Address}
            onChange={ (e) => {
              setAddress(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the adress of the organization"
          />
        </div>

        <div className="my-10 flex justify-between  items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Organization reg no. :</label>
          <input
            value={regno}
            onChange={ (e) => {
              setregno(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the regestration number of the organization"
          />
        </div>

        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Mobile No. :</label>
          <input
            value={mob}
            onChange={ (e) => {
              setmob(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please enter the Mobile No. of the organiztion "
          />
        </div>

        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Verify :</label>
          <input
            value={otp}
            onChange={ (e) => {
              setotp(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please enter the Mobile No. of the organiztion "
          />
        </div>

        <div className="my-10 flex justify-between  items-center gap-4 p-6 rounded-lg shadow-lg border" >
            <button className="border p-2 rounded-md bg-green-500 text-white" >Create Otp</button>
            <button className="border p-2 rounded-md bg-green-500 text-white " >Submit</button>
        </div>

      </div>
      <PrimaryBtn className="text-white w-32 h-14 rounded-full font-bold mt-5 px-6 hidden min-[540px]:block">
          Sign in
        </PrimaryBtn>
    </div>
  );
};

export default Organiztion;
