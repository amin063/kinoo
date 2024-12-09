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
    <div>
      <div className='flex justify-between items-center w-[90%] m-auto my-5'>
        <Link to={"/"} className='text-3xl font-bold text-red-600'>Kinoo</Link>
        <div>
          <Link className='text-lg' to={`/favlists/?userId=${userId}`}>Lists</Link>
        </div>
      </div>
      <hr className='border border-red-600'/>
      <div className='flex justify-center items-center'>
        <input
          onChange={(e) => setInput(e.target.value)}
          className='border border-red-600 h-[30px]' type="text" />
        <div
          onClick={() => searchMovie(input)}
          className='border cursor-pointer h-[30px] my-5 flex items-center px-2 bg-red-600 text-white'>
          Search
        </div>
      </div>
    </div>

  )
}

export default Header