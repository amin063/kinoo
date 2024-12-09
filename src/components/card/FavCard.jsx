import React from 'react'
import { Link } from 'react-router-dom'

function FavCard({title, poster}) {
    return (
        <div className='p-5 text-center'>
            <div className='flex overflow-hidden relative justify-center h-full group'>
                <img
                    className='transition duration-200 w-full rounded-md h-full group-hover:scale-125'
                    src={poster}
                />
                 <div className='absolute bottom-2 w-[100%] flex justify-center group-hover:shadow-[0px_0px_50px_50px_black]'>
                <p className='absolute bottom-2 opacity-0 text-white font-bold transition duration-500 group-hover:opacity-100'>
                    {title}
                </p>
                </div>
            </div>

        </div>
    )
}

export default FavCard