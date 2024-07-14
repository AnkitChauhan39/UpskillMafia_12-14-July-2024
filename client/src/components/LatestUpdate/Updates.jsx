import React from "react";
import Card from "./Card";
import rag from "../../assets/Images/art_image.png";
import local from "../../assets/Images/meet_local.png"
import empower from "../../assets/Images/empower.jpeg";
import waves from "../../assets/Images/waves (1).jpeg"

const Updates = () => {
  const data = [
    {
      src:rag,
      title: "Rag Pickers Unite for Change",
      date: "July 12 , 2024",
      desc: "Join the movement to support localrag pickers in creating a sustainable future Together,we can make a defference!",
    },
    {
      src:local,
      title: "Meet Your local heroes",
      date: "July 12 , 2024",
      desc: "Discover the inspiring stories of rag pickers in your community. get ready to be amazed!",
    },
    {
      src:waves,
      title: "Rag Picker Making Waves",
      date: "July 12 , 2024",
      desc: "Find out hoe rag pickers are revolutionizing waste management , it's time to applaud their efforts!",
    },
    {
      src:empower,
      title: "Empowering Rag Pickers",
      date: "July 12 , 2024",
      desc: "Learn how you can empower rag pickers through our platform , Support their journey toward the brighter future",
    },
  ];

  return (
    <div className="w-full  bg-white opacity-90  flex flex-col justify-center items-center">
      <div className="p-8 text-[44px] font-bold">Latest Updates</div>
      <div className="flex justify-around flex-wrap py-6 px-3">
        {
          data.map( (ele,index) => {
            return <Card title={ele.title} date={ele.date} desc={ele.desc} src={ele.src}/>
          })
        }
      </div>
    </div>
  );
};

export default Updates;
