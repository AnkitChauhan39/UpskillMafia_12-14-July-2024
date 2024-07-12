import React from 'react'

export default function NavBar() {
  return (
    <div className='p-4 rounded-full justify-between flex'>
        <div className="logo">
            <div className="img">
                <img src="" alt="" />
            </div>
            <div className="name">TrashConnect</div>
        </div>
        <div className="navLinks">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
        <div className="callToAction"></div>
    </div>
  )
}
