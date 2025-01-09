import React from 'react'
import { HiOutlineXMark } from "react-icons/hi2";



const UpperHeader = () => {
  return (
    <div className='flex items-center justify-center h-[38px] w-[1525px] bg-black relative'>
      <span className='text-white'>Sign up and get 20% off to your first order. <a className='underline ml-2' href="/home"> Sign Up Now</a></span>
    
      <HiOutlineXMark 
        className='text-white cursor-pointer absolute right-[50px]' 
        size={23}/>
    
    
    </div>
  )
}

export default UpperHeader
