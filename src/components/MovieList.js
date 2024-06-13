import React from 'react'
import MovieCard from './MovieCard';
import "../index.css";
import { Link } from 'react-router-dom';
const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className='px-2 mt-5'>
        <h1 className='md:text-2xl text-lg font-semibold py-2 text-white'>{title}</h1>
        <div className='w-full'>
            <div className='movieList flex overflow-x-scroll gap-4'>
                {
                    movies?.map(movie => <Link to={"/browse/"+movie.id} key={movie.id}><MovieCard posterPath={movie.poster_path}/></Link>)
                }
            </div>
        </div>
        
    </div>
  )
}

export default MovieList