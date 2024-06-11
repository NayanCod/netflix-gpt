import React from 'react';
import { useParams } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import useMovieDetails from '../hooks/useMovieDetails';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import useRecommendationMovie from '../hooks/useRecommendationMovie';
import MovieList from './MovieList';
import useCasts from '../hooks/useCasts';
import Casts from './Casts';

const MoviePage = () => {
  const {movieId} = useParams();
  useMovieDetails(movieId);
  useRecommendationMovie(movieId);
  useCasts(movieId);
  const info = useSelector(store => store?.movies?.movieDetails);
  const recommendMovie = useSelector(store => store.movies?.recommendedMovies);
  const casts = useSelector(store => store.movies?.casts);
  if(!info) return;
  return (
    <div className='bg-black'>
        <VideoTitle title={info.original_title} overview={info.overview}/>
        <VideoBackground movieId={movieId}/>
        <div className='-mt-56 relative z-50 pl-16'>
          <Casts title="Casts" peoples={casts} />
          <MovieList title="Recommendation" movies={recommendMovie} />
        </div>  
    </div>
  );
}

export default MoviePage;