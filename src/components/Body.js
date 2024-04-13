import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'
import {onAuthStateChanged } from "firebase/auth";
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            } else {
                dispatch(removeUser());
            }
          });
    },[])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body