import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store=> store.config.lang);
  return (
    <div className='pt-[10%] w-1/2 mx-auto'>
        <form className='bg-black w-full rounded-md'>
            <input className='py-2 px-4 m-2 w-[80%] outline-none rounded-md' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white w-[17%]'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar