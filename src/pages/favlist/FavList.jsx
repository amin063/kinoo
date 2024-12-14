import React from 'react'
import FavCards from '../../components/cards/FavCards'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { useParams } from 'react-router-dom'

function FavList() {
  const { id } = useParams()
  console.log(id);
  console.log(window.location.href);

  return (
    <div className='w-[75%] m-auto max-w-[1120px]'>
      <FavCards />
      <div className='text-5xl flex gap-5 justify-center'>
        <a target='_blank' href={`https://api.whatsapp.com/send?text=https://kinoo.vercel.app/favlist/${id}`} >
          <IoLogoWhatsapp className='text-green-600' />
        </a>
        <a href={`https://t.me/share?url=https://kinoo.vercel.app/favlist/${id}`} target='_blank'>
          <FaTelegram className='text-blue-500' />
        </a>
      </div>
    </div>
  )
}

export default FavList