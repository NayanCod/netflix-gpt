import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-4 text-lg font-semibold w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black py-2 px-6 rounded-md text-xl bg-opacity hover:bg-opacity-80'>Play</button>
            <button className='mx-2 bg-gray-500 text-white py-2 px-6 rounded-md text-xl bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;