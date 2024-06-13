import React from 'react'
import Login from './Login'
import Browse from './Browse'
import Error from './Error'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import MoviePage from './MoviePage'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/browse/:movieId",
            element: <MoviePage/>
        },
        {
            path: '*',
            element: <Error />
        }

    ]
);

   


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body