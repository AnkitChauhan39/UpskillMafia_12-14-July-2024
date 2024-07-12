import React from 'react'
import PrimaryBtn from '../Primary Btn/PrimaryBtn'

export default function NavBar() {
  return (
    <div className='p-4 rounded-full justify-between flex bg-white bg-opacity-30 items-center sticky top-0 w-4/5 mx-auto'>
        <div className="logo flex items-center gap-4">
            <div className="img bg-black w-32 overflow-hidden rounded-full flex-1 h-14">
                {/* <img src="" alt="" className='w-full h-full object-cover' /> */}
            </div>
            <div className="name h-full text-xl font-bold">TrashConnect</div>
        </div>
        <div className="navLinks flex gap-14 font-semibold">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
        <div className="callToAction">
            <PrimaryBtn className="text-white w-32 h-14 rounded-full font-bold px-6">Join now</PrimaryBtn>
        </div>
    </div>
  )
}
