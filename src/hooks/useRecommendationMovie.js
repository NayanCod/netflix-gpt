import { useDispatch } from "react-redux";
import { addRecommendedMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from "react";
const useRecommendationMovie = (movieId) =>{
    const dispatch = useDispatch();
    // fetch trailer videos && updating the store with trailer video data
    const getRecommendedMovie = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/recommendations?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        const recommendedMovie = json.results;
        // console.log(trailer);
        dispatch(addRecommendedMovies(recommendedMovie));
    };

    useEffect(()=>{
        getRecommendedMovie();
    },[movieId]);
}

export default useRecommendationMovie;
