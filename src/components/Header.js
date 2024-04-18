import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLanguage} from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);


  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
        });

        // Unsubscribed when component unmounts
        return () => unsubcribe();
  },[]);

  const handleGptSearch = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-full px-6 bg-gradient-to-b from-black z-20 flex items-center justify-between'>
        <img className='w-44' src={logo} alt='logo'/>
        {
          user && (
            <div>
              {showGptSearch && <select className='outline-none p-2 rounded-md bg-blue-950 text-white mx-2' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                }
              </select>}
              <button className='py-2 px-4 text-white bg-purple-800 rounded-md mx-4' onClick={handleGptSearch}>{!showGptSearch ? "GPT Search" : "Home"}</button>
              <button className='px-4 py-2 bg-red-700 text-white font-semibold rounded-md' onClick={handleSignOut}>Sign Out</button>
            </div>
          )
        }
    </div>
  )
}

export default Header