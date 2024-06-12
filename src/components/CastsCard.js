import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const CastsCard = ({posterPath, character, name}) => {
  if(!posterPath) return null;
  return (
    <div className='text-white text-center'>
        <img className='md:min-w-48 md:max-w-48 min-w-32 max-w-32 rounded-lg cursor-pointer hover:scale-95 transition-all' alt='movie poster' src={IMG_CDN_URL + posterPath}/>
        <h1 className='md:text-xl text-md'>{name}</h1>
        <p className='md:text-lg text-sm'>as</p>
        <h1 className='md:text-xl text-md'>{character}</h1>
    </div>
  )
}

export default CastsCard;