import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";
import { logo } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();


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


  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex items-center justify-between'>
        <img className='w-44' src={logo} alt='logo'/>
        {
          user && <button className='px-4 py-2 bg-red-700 text-white font-semibold rounded-md' onClick={handleSignOut}>Sign Out</button>
        }
    </div>
  )
}

export default Header