import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const CastsCard = ({posterPath, character, name}) => {
  if(!posterPath) return null;
  return (
    <div className='text-white text-center'>
        <img className='min-w-48 max-w-48 rounded-lg cursor-pointer hover:scale-95 transition-all' alt='movie poster' src={IMG_CDN_URL + posterPath}/>
        <h1 className='text-xl'>{name}</h1>
        <p className='text-lg'>as</p>
        <h1 className='text-xl'>{character}</h1>
    </div>
  )
}

export default CastsCard;