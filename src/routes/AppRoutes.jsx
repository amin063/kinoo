import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import Home from '../pages/home/Home'
import MovieDetail from '../pages/detail/MovieDetail'
import FavLists from '../pages/favlists/FavLists'
import FavList from '../pages/favlist/FavList'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

const AppRoutes = createBrowserRouter ([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "moviedetail/:id",
        element: <MovieDetail />
      },
      {
        path: "favlists",
        element: <FavLists />
      },
      {
        path: 'favlist/:id',
        element: <FavList />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }
])

export default AppRoutes


