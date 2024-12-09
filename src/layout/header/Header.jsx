import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import { movieServices } from '../../services/MovieServices'
import { useDispatch } from 'react-redux'
import { setInputValue } from '../../redux/actions/input.value.action'

function Header() {
  const userId = localStorage.getItem("userId")
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  
  const searchMovie = (s) => {
    if (input) {
      dispatch(setInputValue(s))
    }
  }
  return (
    <div className='flex justify-around items-center my-5'>
      <Link to={"/"} className='text-3xl font-bold text-red-600'>Kinoo</Link>


      <div>
        <Link className='text-lg' to={`/favlists/?userId=${userId}`}>Lists</Link>
      </div>


      <div className='flex items-center'>
        <input
          onChange={(e) => setInput(e.target.value)}
          className='border border-red-600 h-[100%]' type="text" />
        <div
          onClick={()=> searchMovie(input)}
          className='border cursor-pointer h-[100%] flex items-center px-2 bg-red-600 text-white'>
          Search
        </div>
      </div>
    </div>
  )
}

export default Header