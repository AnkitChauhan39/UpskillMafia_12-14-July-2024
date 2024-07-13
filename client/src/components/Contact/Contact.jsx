import React, { useState } from "react";

const Contact = () => {
    
    const [name,setName] = useState("") ; 
    const [phone,setPhone] = useState("") ; 
    const [email,setEmail] = useState("") ; 
    const [message,setMessage] = useState("") ;

  return (
    <div className="flex flex-col justify-center items-center p-10" >
      <div className="text-[44px] font-bold p-8" >Get in Touch Now</div>
      <div className=" flex flex-col gap-4 text-[18px] " >
        <div className="flex gap-4 " >
          <input
           value={name}
          onChange={ (e) => { setName(e.target.value)} }
           className="border md:w-[400px] shadow-lg py-4 px-8 rounded-full " placeholder="Name" />
          <input
          value={email}
          onChange={ (e) => { setEmail(e.target.value)} }
           className="border md:w-[400px] shadow-lg py-4 px-8 rounded-full " placeholder="Email" />
        </div>

        <div>
          <input 
          value={phone}
          onChange={ (e) => { setPhone(e.target.value)} }
          className="border w-full shadow-lg py-4 px-8 rounded-full " placeholder="Phone" />
        </div>

        <div>
          <textarea 
          value={message}
          onChange={ (e) => { setMessage(e.target.value)} }
          rows={2} className="border w-full shadow-lg py-4 px-8 rounded-full " placeholder="Message" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
