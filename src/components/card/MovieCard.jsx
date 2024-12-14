import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addFav } from '../../redux/actions/fav.action';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MovieCard({ Poster, Title, Type, Year, imdbID }) {

    const dispatch = useDispatch()
    const list = useSelector((state) => state.favList)

    const isLike = list.some((item) => item.imdbID === imdbID);



    const changeLike = (movie) => {
        dispatch(addFav(movie));
    };




    return (
        <div className='p-5 text-center '>

            <div className='flex overflow-hidden relative justify-center h-full group'>
                <div className='-z-10 opacity-0 fixed h-full w-full top-0 left-0 transition duration-700 group-hover:opacity-50'>
                    <img src={Poster} className='h-full w-full object-cover' />
                </div>
                <img
                    className='transition duration-200 w-full h-full group-hover:scale-125'
                    src={Poster}
                />
                <div className='absolute bottom-2 w-[100%] flex justify-center group-hover:shadow-[0px_0px_50px_50px_black]'>
                    <p className='absolute bottom-2 opacity-0 text-white font-bold transition duration-500 group-hover:opacity-100'>
                        {Title}
                    </p>
                </div>

                <div className='absolute right-2 top-2 bg-white p-1 rounded-full text-lg'>
                    {isLike
                        ?
                        <FaHeart className='text-red-600' onClick={() => changeLike({ Poster, Title, imdbID })} />
                        :
                        <FaRegHeart onClick={() => changeLike({ Poster, Title, imdbID })} />
                    }
                </div>
            </div>
            <Link
                className='text-white text-center bg-red-600 border border-red-600 inline-block w-full py-1'
                to={`/moviedetail/${imdbID}`} >View Details</Link>
        </div>
    )
}

export default MovieCard