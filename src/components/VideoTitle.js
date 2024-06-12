import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[15%] md:px-20 px-10 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='md:text-5xl text-2xl font-bold'>{title}</h1>
        <p className='py-4 text-lg font-semibold w-1/4 hidden md:block'>{overview.slice(0,200)}...</p>
        <div className='md:mt-0 mt-2'>
            <button className='md:bg-white md:text-black text-white bg-slate-500 bg-opacity-50 md:py-2 md:px-6 py-1 px-4 rounded-md text-md md:text-xl bg-opacity hover:bg-opacity-80'>Play</button>
            <button className='mx-2 bg-gray-500 text-white py-2 px-6 rounded-md text-xl bg-opacity-50 hidden md:inline-block'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;