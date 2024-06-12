import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG } from '../utils/constant';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMsg(message);

        if(message) return;

        // Sign In/Sign up logic

        if(!isSignInForm){
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                            const {uid, email, displayName } = auth.currentUser;
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName : displayName,
                            })
                        );
                      }).catch((error) => {
                        setErrorMsg(error.message);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        }
        else{
            // Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage + "-" + errorCode);
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={BG} alt='bg' className='h-screen w-screen object-cover'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 md:w-3/12 w-[90%] bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
            <p className='text-red-700 font-bold tetx-lg my-2'>{errorMsg}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer underline' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now" : "Already registered? Sign in now"}</p>
        </form>
    </div>
  )
}

export default Login