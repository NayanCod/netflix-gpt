import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG } from '../utils/constant';
const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={BG} alt='bg' className=''/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch