import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { authServices } from '../../services/AuthServices'

function Register() {
    const [formData, setFormData] = useState({})
    const inputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData);
    }
    const createAccount = (e) => {
        e.preventDefault();
        if (formData.username.length < 6) {
            alert('Username should be at least 7 characters long')
            return;
        } else if (formData.pass.length < 6) {
            alert('Password should be at least 7 characters long')
            return;
        }
        authServices.createUser(formData).then((res) => "res" + res)
    }
    return (
        <div className='h-[100vh] w-full left-0 top-0 fixed z-50 flex justify-center items-center bg-black'>
            <form onSubmit={createAccount} className='bg-white h-[70%] w-[90%] opacity-100 flex flex-col items-center justify-center rounded-sm border border-red-600'>
                <h1 className='font-bold text-2xl text-red-600 mb-5'>Register</h1>
                <input name='username' onChange={inputChange} className='p-2 rounded-md mb-10' placeholder='Enter your name' type="text" />
                <input name='pass' onChange={inputChange} className='p-2 rounded-md mb-10' placeholder='Enter your password' type="password" />
                <input type="submit" value="Register" className='bg-red-600 mb-5 text-white border-none px-5 py-1 rounded-sm' />
                <Link to="/login">Do you already have account?</Link>
            </form>
        </div>
    )
}

export default Register