import { useDispatch } from "react-redux";
import { addCasts } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from "react";
const useCasts = (movieId) =>{
    const dispatch = useDispatch();
    // fetch trailer videos && updating the store with trailer video data
    const getCasts = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/credits?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        const casts = json.cast;
        // console.log(trailer);
        dispatch(addCasts(casts));
    };

    useEffect(()=>{
        getCasts();
    },[movieId]);
}

export default useCasts;