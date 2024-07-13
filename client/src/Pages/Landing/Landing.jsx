import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import LandingHero from "../../components/Landing Hero/LandingHero";
import Updates from "../../components/LatestUpdate/Updates";
import AboutSection from "../../components/About/AboutSection";
import Testimonial from "../../components/Testimonials/Testimonial";
import Curious from "../../components/Curious/Curious";
import Social from "../../components/SocialLinks/Social";
import Contact from "../../components/Contact/Contact";
import LandingMap from "../../components/Landing map/LandingMap";

export default function Landing() {
  return ( 
    <div className="relative p-4">
      <NavBar />
      <LandingHero />
      <AboutSection />
      <LandingMap />
      {/* <Updates />
      <Testimonial/> 
      <Curious/>
      <Social />
      <Contact /> */}
    </div>
  );
}
