import React, { useState } from "react";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";
import SERVER_URL from "../../constants.mjs"

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const  response = async () => {
    console.log(`${SERVER_URL}`)
    const res = await fetch(`${SERVER_URL}/contactUs`,
    {
        method:"POST",
        body:JSON.stringify({
            name : name,
            email : email,
            phoneNo : phone,
            message : message
        }),
        headers: {"Content-type": "application/json; charset=UTF-8",},
    })

    if(res.ok)
    {
        console.log("ok hai sab")
    }
    else
    {
        console.log("check kro")
    } 
  }

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="text-[24px] sm:text-[34px] md:text-[44px] font-bold p-8">
        Get in Touch Now
      </div>
      <div className=" flex flex-col gap-4 text-[18px] ">
        <div className="flex gap-4 flex-wrap">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border w-full md:w-[400px] shadow-lg py-4 px-8 rounded-full "
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border w-full md:w-[400px] shadow-lg py-4 px-8 rounded-full "
            placeholder="Email"
          />
        </div>

        <div>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="border w-full shadow-lg py-4 px-8 rounded-full "
            placeholder="Phone"
          />
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows={2}
            className="border w-full shadow-lg py-4 px-8 rounded-full "
            placeholder="Message"
          />
        </div>
      </div>
      <div className="py-8" >
      <PrimaryBtn onClick={() => response()} className="text-white w-32 h-14 rounded-full font-bold px-6 hidden min-[540px]:block">
        Submit
      </PrimaryBtn>
      </div> 
    </div>
  );
};

export default Contact;
