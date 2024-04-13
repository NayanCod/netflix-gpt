import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
const Header = () => {
  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex items-center justify-between'>
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
        {
          user && <button className='px-4 py-2 bg-red-700 text-white font-semibold rounded-md' onClick={handleSignOut}>Sign Out</button>
        }
    </div>
  )
}

export default Header