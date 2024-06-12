import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className=''>
        <img className='md:min-w-48 md:max-w-48 min-w-32 max-w-32 rounded-lg cursor-pointer hover:scale-95 transition-all' alt='movie poster' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;