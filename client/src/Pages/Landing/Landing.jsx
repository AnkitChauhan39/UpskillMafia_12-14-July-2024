import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import LandingHero from "../../components/Landing Hero/LandingHero";
import Updates from "../../components/LatestUpdate/Updates";
import AboutSection from "../../components/About/AboutSection";
import Testimonial from "../../components/Testimonials/Testimonial";
import Curious from "../../components/Curious/Curious";

export default function Landing() {
// <<<<<<< HEAD
//   return (
//     <div className="relative p-4 box-border">
//         <NavBar />
//       <LandingHero />
//       <AboutSection />
//       <Curious />
//       {/* <Updates />
//       <Testimonial/> */}
// =======
  return ( 
    <div className="relative p-4">
      <NavBar />
      <LandingHero />
      <AboutSection />
      <Updates />
      <Testimonial/> 
      <Curious/>
{/* >>>>>>> 515f26d8be7c24652b932a4a4c01d15a1f12d57d */}
    </div>
  );
}
