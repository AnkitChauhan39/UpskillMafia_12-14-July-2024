import React from 'react'
import Card from './Card'

const Updates = () => {
  return (
    <div className='flex flex-col justify-center items-center' >
      <div className='text-white p-8 text-[44px] font-semibold' >Latest Updates</div>
      <div className=' w-full  bg-white opacity-90 h-[800px] flex justify-around flex-wrap py-6 px-3' >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Updates
