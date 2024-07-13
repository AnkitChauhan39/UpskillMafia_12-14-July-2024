import React from "react";
import Testimo from "./Testimo";

const data = [
  {
    rev: "Incredible service! Maxwell Green connected me with a reliable rag picker who transformed my view on recycling",
    name: "Samantha Bright",
  },
  {
    rev: "Incredible service! Maxwell Green connected me with a reliable rag picker who transformed my view on recycling",
    name: "Samantha Bright",
  },
  {
    rev: "Incredible service! Maxwell Green connected me with a reliable rag picker who transformed my view on recycling",
    name: "Samantha Bright",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full  bg-white opacity-90 flex flex-col justify-center items-center">
      <div className="p-8 text-[44px] font-bold">Testimonials</div>
      <div className="flex justify-around gap-2 flex-wrap py-6 px-4">
        {data.map((ele, index) => {
          return <Testimo rev={ele.rev} name={ele.name} />;
        })}
      </div>
      <div className="py-10 mt-10 flex flex-wrap justify-around gap-[100px]">
        <div className="md:w-[300px] flex justify-center items-center flex-col">
          <div className="text-[60px] font-bold text-gray-500">10,000+</div>
          <div className="text-[22px] font-semibold">Happy Users</div>
        </div>
        <div className="md:w-[300px] flex justify-center items-center flex-col">
          <div className="text-[60px] font-bold text-gray-500">500+</div>
          <div className="text-[22px] font-semibold">Verified Pickers</div>
        </div>
        <div className="md:w-[300px] flex justify-center  items-center flex-col">
          <div className="text-[60px] font-bold text-gray-500">500,000+</div>
          <div className="text-[22px] font-semibold">Pounds Recycled</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
