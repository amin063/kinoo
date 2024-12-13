import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue } from '../../redux/actions/input.value.action'
import { userServices } from '../../services/UserServices'
import { getUser } from '../../redux/actions/user.action'
import { FaExchangeAlt } from "react-icons/fa";

function Header() {
  const id = localStorage.getItem("id")
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userDetails)
  const nav = useNavigate()



  useEffect(() => {
    if (!localStorage.getItem("id")) {
      nav('/login');
    }
  }, [nav]);


  useEffect(() => {
    userServices.getUser(id).then((data) => dispatch(getUser(data)))
  }, [])


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
          <Link className='text-lg' to={`/favlists/?userId=${id}`}>Lists</Link>
        </div>
        <div className='flex justify-center items-center gap-2'>
          {user.username}
          <Link to={"/login"}>
            <FaExchangeAlt className='text-red-600 cursor-pointer' />
          </Link>
        </div>
      </div>
      <hr className='border border-red-600' />
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