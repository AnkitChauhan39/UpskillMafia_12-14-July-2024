import React from "react";
import rag from "../../assets/art_image.png";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";

const Card = ({title,date,desc}) => {
  
  return (
    <div className="w-[350px] flex flex-col gap-4 h-fit rounded-2xl  p-4 border-black ">
      <div className="md:w-[320px] md:h-[300px] rounded-2xl overflow-hidden shadow-black shadow-md">
        <img
          className="h-[100%] w-[100%] rounded-2xl object-cover"
          src={rag}
          alt=""
        />
      </div>
      <div>
        <div className="text-[32px] font-bold " >{title}</div>
        <div className="text-[20px]"  >{date}</div>
        <div className="text-[18px]" >{desc}</div>
      </div>
      <div>
        <PrimaryBtn className="text-white w-32 h-14 rounded-full font-bold px-6">Join</PrimaryBtn>
      </div>
    </div>
  );
};

export default Card;
