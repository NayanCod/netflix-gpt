import { useDispatch } from "react-redux";
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    // fetch trailer videos && updating the store with trailer video data
    const getMovieVideos = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        const filterdata = json.results.filter(video => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(()=>{
        getMovieVideos();
    },[movieId]);
}

export default useMovieTrailer;