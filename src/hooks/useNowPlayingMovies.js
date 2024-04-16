import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from "../utils/movieSlice";
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    // Fetch data from TMDB API and update the store
    const dispatch = useDispatch();
    
      const getNowPlayingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      };
    
      useEffect(()=>{
        getNowPlayingMovies();
      }, []); 
};

export default useNowPlayingMovies;