import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResults } from '../utils/gptSlice';
import axios from 'axios';

const GptSearchBar = () => {
    const [loading, setLoading] = useState(false);
    const langKey = useSelector(store=> store.config.lang);
    const searchtext = useRef();
    const dispatch = useDispatch();
    const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY || "AIzaSyB7IFem0F4r2JqFzk3Ae72ijwRszjhTzEU";
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    const searchMoviesTMDB = async(movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        return json.results;
    }
    
    const handleGptSearchClick = async() => {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query " + searchtext.current.value + ". Only give me names of 5 movies., comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        
        try {
            setLoading(true);
            const res = await axios.post(GEMINI_URL, {
                contents: [{ parts: [
                    {
                        text: gptQuery,
                    }
                ]}],
            });
            console.log(res?.data);
            
            const response = res?.data?.candidates[0]?.content?.parts[0]?.text || "No response";
            const text = response;
    
            if(!text){
                console.log("no movies found!");
            }
    
            const gptMovies = text.split(", ");
    
            const promiseArray = gptMovies.map(async(movie) => searchMoviesTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);
    
            dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
            setLoading(false);
            
        } catch (error) {
            console.log("Error fetching data from Gemini API:", error);
            setLoading(false);
        }
    }
  return (
    <div className='md:pt-[10%] pt-[35%] md:w-1/2 w-[97%] mx-auto'>
        <form className='bg-black w-full rounded-md' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} className='py-2 px-4 m-2 md:w-[80%] w-[75%] outline-none rounded-md' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white w-[17%]' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
        <div className='flex justify-center items-center mt-4'>
            {
                loading && (<div>
                    <svg className="animate-spin h-10 w-10 text-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8.009 8.009 0 0 1 12 20Z"/>
                        <path fill="currentColor" d="M12.94 7.06a1.5 1.5 0 1 1-2.12-2.12l4.95-4.95a1.5 1.5 0 1 1-2.12-2.12L10.82-.94a3.001 3.001 0 1 0-4.24-.24l4.95-4.95a3.001 3.001 0 1 0-4.24-.24l4.95-4.95a3.001 3.001 0 1 0-4.24-.24l4.95-4.95a3.001 3.001 0 1 0-4.24-.24l4.95-4.95a3.001 3.001 0 1 0-4.24-.24l4.95-4.95a3.001 3.001 0 1 0-4.24-.24l4.95-4.95a3.001 3.001 0 1 0-4.24-.24Z"/>
                    </svg>
                </div>)
            }
        </div>
    </div>
  )
}

export default GptSearchBar;