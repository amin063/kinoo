import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import Home from '../pages/home/Home'
import MovieDetail from '../pages/detail/MovieDetail'
import FavLists from '../pages/favlists/FavLists'
import FavList from '../pages/favlist/FavList'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='/moviedetail/:id' element={<MovieDetail />} />
          <Route path='/favlists' element={<FavLists />} />
          <Route path='/favlist/:id' element={<FavList/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes