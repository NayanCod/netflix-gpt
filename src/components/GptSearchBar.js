import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResults } from '../utils/gptSlice';
import { model } from '../utils/openai';

const GptSearchBar = () => {
    const langKey = useSelector(store=> store.config.lang);
    const searchtext = useRef();
    const dispatch = useDispatch();

    const searchMoviesTMDB = async(movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        return json.results;
    }
    
    const handleGptSearchClick = async() => {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchtext.current.value + ". Only give me names of 5 movies., comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const result = await model.generateContent(gptQuery);
        const response = result.response;
        const text = response?.candidates[0]?.content?.parts[0].text;

        if(!text){
            console.log("no movies found!");
        }

        const gptMovies = text.split(", ");


        const promiseArray = gptMovies.map(async(movie) => searchMoviesTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));

    }
  return (
    <div className='md:pt-[10%] pt-[35%] md:w-1/2 w-[97%] mx-auto'>
        <form className='bg-black w-full rounded-md' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} className='py-2 px-4 m-2 md:w-[80%] w-[75%] outline-none rounded-md' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white w-[17%]' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;