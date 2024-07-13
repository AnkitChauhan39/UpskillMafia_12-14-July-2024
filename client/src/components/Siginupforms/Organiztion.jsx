import React from "react";

const Organiztion = () => {
  return (
    <div className="flex justify-center flex-col items-center  ">
      <div className="text-[40px] p-4" >Create An Account</div>
      <div className="justify-center items-center w-[800px]" >
        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border" >
          <label className="text-[24px]" >Organization Name :</label>
          <input
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the name of the organiztion"
          />
        </div>
        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Organization Address :</label>
          <input
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the adress of the organization"
          />
        </div>
        <div className="my-10 flex justify-between  items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Organization reg no. :</label>
          <input
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please Enter the regestration number of the organization"
          />
        </div>
        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Mobile No. :</label>
          <input
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please enter the Mobile No. of the organiztion "
          />
        </div>
        <div className="my-10 flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg border">
          <label className="text-[24px]">Verify :</label>
          <input
            className="border w-[60%] py-4 px-8 rounded-full "
            placeholder="Please enter the Mobile No. of the organiztion "
          />
        </div>
        <div className="my-10 flex justify-between  items-center gap-4 p-6 rounded-lg shadow-lg border" >
            <button className="border p-2 rounded-md bg-green-500 text-white" >Create Otp</button>
            <button className="border p-2 rounded-md bg-green-500 text-white " >Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Organiztion;
