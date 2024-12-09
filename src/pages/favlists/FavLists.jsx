import React, { useEffect, useState } from 'react'
import { favServices } from '../../services/FavServices'
import { IoMdRemoveCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

function FavLists() {
  
  const [favList, setFavList] = useState([]);
  const userId = localStorage.getItem("userId")


  useEffect(() => {
    favServices.getFavLists(userId).then((data) => setFavList(data))
  }, [])

  const deleteList = (id) => {
    favServices.deleteFavList(id)
      .then(() => {
        setFavList(favList.filter(fav => fav.id !== id));
      })
  }


  return (
    favList?.length
      ?
      (
        < div className='w-[90%]  m-auto flex flex-col justify-center items-center gap-10' >
          <h1 className='font-bold text-2xl'>My List</h1>
          {
            favList.map((fav) => {
              return (
                <div className='flex gap-5 items-center w-[100%]'>
                  <Link
                    to={`/favlist/${fav.id}`}
                    className='w-[80%] rounded-md  p-3 border border-red-600' key={fav.id}>
                    <p className='font-bold'>{fav.name}</p>
                  </Link>
                  <IoMdRemoveCircle
                    onClick={() => deleteList(fav.id)} className='text-[25px] text-red-600' />
                </div>

              )
            })
          }
        </div >
      )
      :
      <div className='flex justify-center items-center h-[70vh] font-bold'>No favorite lists found</div>

  )
}

export default FavLists