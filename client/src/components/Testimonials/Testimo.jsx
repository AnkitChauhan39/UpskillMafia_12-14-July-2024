import React from "react";

const Testimo = ({rev,name,src}) => {
  return (
    <div className="md:w-[450px] h-fit py-6 px-8 text-center">
      <div className="text-[18px]" >{rev}</div>
      <div className="py-10" >
          <span className="inline-flex items-center shadow-black shadow-md  justify-center w-20 h-20 rounded-full bg-black text-white overflow-hidden">
            <img src={src} className="h-full w-full overflow-hidden object-cover " alt="" />
          </span>
      </div>
      <div className="text-[24px]" >{name}</div>
    </div> 
  );
};

export default Testimo;
