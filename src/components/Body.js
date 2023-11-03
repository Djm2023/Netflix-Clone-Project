import React from 'react'
import Homepage from './Homepage';
import Login from './Login';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Browse from './Browse';

const Body = () => { 
   
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;