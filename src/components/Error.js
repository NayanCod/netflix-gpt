import React from 'react'
import { logo } from '../utils/constant'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='bg-black h-screen overflow-x-hidden'>
        <div className='w-[95%] flex justify-between flex-col md:flex-row items-center mx-auto pt-4'>
            <img className='w-44' src={logo} alt='logo'/>
            <Link to="/browse"><button className='text-white bg-red-600 px-4 py-2 rounded-md font-bold'>Home</button></Link>
        </div>
        <div className='w-[95%] mx-auto md:mt-[10%] mt-[20%] ml-[15%] text-white'>
            <h1 className='md:text-5xl text-4xl font-bold'>Page Not Found !</h1>
            <p className='mt-9 md:text-2xl text-lg'>404 Error</p>
            <p className='md:text-2xl text-lg'>Please go to the home page by clicking the button below.</p>
            <Link to="/browse"><button className='text-white text-md border-white border-[2px] md:px-5 md:py-2 px-4 py-1 rounded-sm font-bold mt-4 hover:text-black hover:bg-white duration-500'>Home</button></Link>

        </div>
        
    </div>
  )
}

export default Error