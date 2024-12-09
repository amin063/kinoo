import React from 'react'
import { Link } from 'react-router-dom'

function BasicBtn({func, title }) {
    return (
        <button
            onClick={func}
            className=' text-white text-center rounded-md bg-red-600 border border-red-600 inline-block w-full py-1' >{title}</button>
    )
}

export default BasicBtn