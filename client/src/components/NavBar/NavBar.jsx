import React from 'react'
import PrimaryBtn from '../Primary Btn/PrimaryBtn'

export default function NavBar() {
  return (
    <div className='p-4 rounded-full justify-between flex bg-white bg-opacity-70 items-center fixed top-8 w-4/5 left-1/2 -translate-x-1/2 z-10'>
        <div className="logo flex items-center gap-4">
            <div className="img bg-black w-32 overflow-hidden rounded-full flex-1 h-14">
                {/* <img src="" alt="" className='w-full h-full object-cover' /> */}
            </div>
            <div className="name h-full text-xl font-bold">EcoSaathi</div>
        </div>
        <div className="navLinks flex gap-14 font-semibold">
            <div className='cursor-pointer font-bold hover:text-opacity-50 text-black'>Home</div>
            <div className='cursor-pointer font-bold hover:text-opacity-50 text-black'>About</div>
            <div className='cursor-pointer font-bold hover:text-opacity-50 text-black'>Contact</div>
        </div>
        <div className="callToAction">
            <PrimaryBtn className="text-white w-32 h-14 rounded-full font-bold px-6">Join now</PrimaryBtn>
        </div>
    </div>
  )
}
