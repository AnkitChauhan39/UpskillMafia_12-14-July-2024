import React from "react";
import Card from "./Card";

const Updates = () => {
  const data = [
    {
      title: "Rag Pickers Unite for Change",
      date: "July 12 , 2024",
      desc: "Join the movement to support localrag pickers in creating a sustainable future Together,we can make a defference!",
    },
    {
      title: "Rag Pickers Unite for Change",
      date: "July 12 , 2024",
      desc: "Join the movement to support localrag pickers in creating a sustainable future Together,we can make a defference!",
    },
    {
      title: "Rag Pickers Unite for Change",
      date: "July 12 , 2024",
      desc: "Join the movement to support localrag pickers in creating a sustainable future Together,we can make a defference!",
    },
    {
      title: "Rag Pickers Unite for Change",
      date: "July 12 , 2024",
      desc: "Join the movement to support localrag pickers in creating a sustainable future Together,we can make a defference!",
    },
  ];

  return (
    <div className="w-full  bg-white opacity-90  flex flex-col justify-center items-center">
      <div className="p-8 text-[44px] font-bold">Latest Updates</div>
      <div className="flex justify-around flex-wrap py-6 px-3">
        {
          data.map( (ele,index) => {
            return <Card title={ele.title} date={ele.date} desc={ele.desc} />
          })
        }
      </div>
    </div>
  );
};

export default Updates;
