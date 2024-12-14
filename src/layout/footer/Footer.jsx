import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black flex flex-col justify-center items-center mt-20 py-10 gap-10'>
      <Link to={"/"} className='text-3xl font-bold text-red-600'>Kinoo</Link>
      <a href="https://github.com/amin063/kinoo" target='_blank'
        className="text-5xl text-white hover:text-gray-400 transition duration-300 border border-red-600 rounded-full"
      >
        <FaGithub />
      </a>
    </div>
  )
}

export default Footer