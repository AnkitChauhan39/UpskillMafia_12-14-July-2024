<<<<<<< HEAD
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Updates from '../../components/LatestUpdate/Updates'
import Testimonial from '../../components/Testimonials/Testimonial'

export default function Landing() {
  return (
    <div className='relative p-4'>
    <NavBar />
    <Updates/>
    <Testimonial/>
=======
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import LandingHero from "../../components/Landing Hero/LandingHero";
import Updates from "../../components/LatestUpdate/Updates";

export default function Landing() {
  return (
    <div className="relative p-4">
      <NavBar />
      <LandingHero />
      <Updates />
>>>>>>> 1566aead4751045fe869abd815f57d26e2052740
    </div>
  );
}
