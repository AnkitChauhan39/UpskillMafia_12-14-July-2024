import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Ques = ({ ques, ans }) => {
  const [show, setShow] = useState(false);
  return (
// <<<<<<< HEAD
//     <div className=" w-[800px] max-w-full py-6 px-10 border shadow-md  rounded-2xl ">
//       <div className="text-[24px] font-semibold flex justify-between items-center py-2">
// =======
    <div className=" md:w-[800px] py-6 px-10 border shadow-md rounded-2xl w-full">
      <div className=" text-[18px] md:text-[24px] font-semibold flex justify-between items-center py-2">
{/* >>>>>>> 515f26d8be7c24652b932a4a4c01d15a1f12d57d */}
        <span>{ques}</span>
        {!show && (
          <span>
            <IoIosArrowDown
              className=" cursor-pointer "
              onClick={() => {
                setShow(!show);
              }}
            />
          </span>
        )}
        {show && (
          <span>
            <IoIosArrowUp
              className=" cursor-pointer "
              onClick={() => {
                setShow(!show);
              }}
            />
          </span>
        )}
      </div>
      {show && <div className="text-[18px]">{ans}</div>}
    </div>
  );
};

export default Ques;
