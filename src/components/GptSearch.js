import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG } from '../utils/constant';
const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img src={BG} alt='bg' className='object-cover h-screen w-screen'/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch