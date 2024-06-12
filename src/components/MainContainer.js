import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[(Math.floor(Math.random() * movies.length))];
    // const mainMovie = movies[0];
    // console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;


    return (
        <div className='md:pt-0 pt-[25%] bg-black'>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer