import React from 'react'
import { CiBoxList } from 'react-icons/ci'

function ListBtn({ isSideBarOpen, setIsSideBarOpen }) {
    return (
        <div
        onClick={()=> setIsSideBarOpen(!isSideBarOpen)}
            className='flex justify-center items-center fixed cursor-pointer bottom-3 right-3 rounded-full pl-2 group transition duration-200 hover:bg-red-600 '>
            <span className='flex justify-center items-center opacity-0 h-[50px]  text-white group-hover:opacity-100 '>Movie List</span>
            <CiBoxList className='w-[50px] h-[50px] bg-red-600 p-2 text-white rounded-full transition duration-1000 group-hover:rotate-180' />
        </div>
    )
}

export default ListBtn