import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import LandingHero from "../../components/Landing Hero/LandingHero";
import Updates from "../../components/LatestUpdate/Updates";
import AboutSection from "../../components/About/AboutSection";
import Testimonial from "../../components/Testimonials/Testimonial";
import Curious from "../../components/Curious/Curious";
import Social from "../../components/SocialLinks/Social";
import Contact from "../../components/Contact/Contact";
import LandingMap from "../../components/Landing map/LandingMap";
import Askme from "../../components/Askme/Askme";

export default function Landing() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative p-4">
      <NavBar />
      <LandingHero />
      <AboutSection />
      <Updates />
      <Testimonial />
      <Curious />
      <Social />
      <Contact />
      <LandingMap />
      {!show && (
        <div className=" absolute bottom-10 right-5 rounded-2xl">
          <span  
           onClick={ () => {
            setShow(!show)
           }
           }
           className="inline-flex items-center shadow-black shadow-md font-semibold justify-center w-20 h-20 rounded-full bg-blue-500 text-white overflow-hidden animate-bounce">
            ASK ME
          </span>
        </div>
      )}
      {show && (
        <div className=" absolute bottom-10 right-5 rounded-2xl">
          <Askme show={show} setshow={setShow} />
        </div>
      )}

      {/* <Organiztion/> */}
      <div className="h-[150px] flex justify-evenly items-center text-[20px] bg-black text-white" >
      <div>© 2024 Eco Rag Pickers. All Rights Reserved.</div>
      <div className="flex gap-4 ">
        <div>About</div>
        <div>Service</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      </div>
    </div>
  );
}
