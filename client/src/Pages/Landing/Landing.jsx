import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Updates from '../../components/LatestUpdate/Updates'

export default function Landing() {
  return (
    <div className='relative p-4'>
    <NavBar />
    <Updates/>
    </div>
  ) 
}
