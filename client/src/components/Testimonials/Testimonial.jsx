import React from "react";
import Testimo from "./Testimo";
import man1 from "../../assets/Images/man1.jpeg"
import man2 from "../../assets/Images/man2.jpeg"
import girl from "../../assets/Images/girl.jpeg"
import CountUp from 'react-countup';

const data = [
  {
    src:girl,
    rev: "Incredible service! Maxwell Green connected me with a reliable rag picker who transformed my view on recycling",
    name: "Samantha Bright",
  },
  {
    src:man1,
    rev: "Luna Swift's dedication to building trust is commendable. i found a  gem in the rag picker she recommended!",
    name: "Ethan Blaze",
  },
  {
    src:man2,
    rev: "Ecosathi made the payment process seamless.I felt secure and supported throught the transcation",
    name: "Jhon steel",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full  bg-white opacity-90 flex flex-col justify-center items-center">
      <div className="p-8 text-[44px] font-bold">Testimonials</div>
      <div className="flex justify-around gap-2 flex-wrap py-6 px-4">
        {data.map((ele, index) => {
          return <Testimo rev={ele.rev} name={ele.name} src={ele.src} />;
        })}
      </div>
      <div className="py-10 mt-10 flex flex-wrap justify-around gap-[100px]">
      <div className="md:w-[300px] flex justify-center items-center flex-col">
        <div className="text-[60px] font-bold text-gray-500">
          <CountUp end={10000} duration={7} separator="," />
          +
        </div>
        <div className="text-[22px] font-semibold">Happy Users</div>
      </div>
      <div className="md:w-[300px] flex justify-center items-center flex-col">
        <div className="text-[60px] font-bold text-gray-500">
          <CountUp end={500} duration={5} separator="," />
          +
        </div>
        <div className="text-[22px] font-semibold">Verified Pickers</div>
      </div>
      <div className="md:w-[300px] flex justify-center items-center flex-col">
        <div className="text-[60px] font-bold text-gray-500">
          <CountUp end={500000} duration={10} separator="," />
          +
        </div>
        <div className="text-[22px] font-semibold">Pounds Recycled</div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
