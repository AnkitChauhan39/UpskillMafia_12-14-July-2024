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
    </div>
  ) 
}
