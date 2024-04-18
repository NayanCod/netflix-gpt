import React from 'react'
import MovieCard from './MovieCard';
import "../index.css";

const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className='px-2 mt-5'>
        <h1 className='text-2xl font-semibold py-2 text-white'>{title}</h1>
        <div className='w-full'>
            <div className='movieList flex overflow-x-scroll gap-4'>
                {
                    movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)
                }
                
            </div>
        </div>
        
    </div>
  )
}

export default MovieList