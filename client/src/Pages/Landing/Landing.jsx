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
    <>
      <div className="relative p-4">
        <NavBar />
        <LandingHero />
        <AboutSection />
        <LandingMap />
        <Testimonial />
        <Curious />
        <Social />
        <Contact />
      </div>
        <div className="text-white bg-black text-center py-20 select-none">© 2024 EcoSaathi. All Rights Reserved.</div>
    </>
  );
}
