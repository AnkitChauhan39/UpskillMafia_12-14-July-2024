import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import LandingHero from "../../components/Landing Hero/LandingHero";
import Updates from "../../components/LatestUpdate/Updates";
import AboutSection from "../../components/About/AboutSection";
import Testimonial from '../../components/Testimonials/Testimonial'
import Curious from "../../components/Curious/Curious";

export default function Landing() {
  return ( 
    <div className="relative p-4">
      <NavBar />
      {/* <LandingHero />
      <AboutSection /> */}
      {/* <Updates />
      <Testimonial/> */}
    </div>
  );
}
