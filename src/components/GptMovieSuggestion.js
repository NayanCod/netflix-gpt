import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieResults, movieNames} = useSelector(store => store.gpt);
  if(!movieNames) return null;
  return (
    <div className='p-4 bg-black bg-opacity-90 mt-5'>
      <div>
        {
          movieNames.map((movieName, index) => (<MovieList key={movieName} title={movieName} movies={movieResults[index]}/>))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestion;