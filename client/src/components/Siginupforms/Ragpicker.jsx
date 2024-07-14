import React, { useCallback, useState } from 'react'
import PrimaryBtn from '../Primary Btn/PrimaryBtn'
import { useAuth0 } from '@auth0/auth0-react'

const Ragpicker = () => {

    const [name,setname] = useState("") ; 
    const [Aadharno,setAadharno] = useState(""); 
    const [dob,setdob] = useState("") ; 
    const [gen,setgen] = useState("") ; 
    const [mob,setmob] = useState("") ; 
    const [Address,setAddress] =  useState("") ;
    const [otp,setotp] = useState("") ;   

    
  return (
    <div className="flex justify-center flex-col items-center bg-slate-200  ">
      <div className="text-[40px] p-4" >Create An Account</div>
      <div className="justify-center items-center w-[800px]" >
        
        <div className="my-10 flex justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-lg border" >
          <label className="text-[24px]" >Name in Aadhar :</label>
          <input
            value={name}
            onChange={ (e) => {
              setname(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the name of the Aadhar"
          />
        </div>

        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Aadhar Number :</label>
          <input
            value={Aadharno}
            onChange={ (e) => {
              setAadharno(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the Aadhar no."
          />
        </div>

        <div className="my-10 flex justify-between  items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Date of birth :</label>
          <input
            value={dob}
            onChange={ (e) => {
              setdob(e.target.value)
            }}
            type='date'
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the Date of Birth"
          />
        </div>

        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Gender .:</label>
          <input
            value={gen}
            onChange={ (e) => {
              setgen(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please enter the Gender ."
          />
        </div>

        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Address :</label>
          <input
            value={Address}
            onChange={ (e) => {
              setAddress(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please enter the Address"
          />
        </div>
        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Mobile no :</label>
          <input
            value={mob}
            onChange={ (e) => {
              setmob(e.target.value)
            }}
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please enter the Mobile No. "
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
            placeholder="Please enter the Otp"
          />
        </div>
        <div className="my-10 flex justify-between  items-center gap-4 p-6 rounded-lg shadow-lg border" >
            <button className="border p-2 rounded-md bg-green-500 text-white" >Create Otp</button>
            <button className="border p-2 rounded-md bg-green-500 text-white " >Submit</button>
        </div>
        <PrimaryBtn className="text-white w-32 h-14 rounded-full font-bold mt-5 px-6 hidden min-[540px]:block">
          Sign in
        </PrimaryBtn>
      </div>
    </div>
  )
}

export default Ragpicker
