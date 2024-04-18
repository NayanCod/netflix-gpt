import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className=''>
        <img className='min-w-48 rounded-lg cursor-pointer hover:scale-95 transition-all' alt='movie poster' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;