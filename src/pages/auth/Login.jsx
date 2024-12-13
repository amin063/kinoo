import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/actions/user.action'
import { authServices } from '../../services/AuthServices'

function Login() {
    const [formData, setFormData] = useState({})
    const dis = useDispatch()
    const nav = useNavigate();


    const inputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData);
    }
    const loginUser = (e) => {
        e.preventDefault();
        (async () => {
            const res = await authServices.loginUser(formData)
            console.log(res[0].id);
            
            if (res) {
                localStorage.setItem("id", res[0].id)
                dis(getUser(res[0]))
                nav('/')
            }
        })()
    }


    return (
        <div className='h-[100vh] w-full left-0 top-0 fixed z-50 flex justify-center items-center bg-black'>
            <form onSubmit={loginUser} className='bg-white h-[70%] w-[90%] opacity-100 flex flex-col items-center justify-center rounded-sm border border-red-600'>
                <h1 className='font-bold text-2xl text-red-600 mb-5'>Login</h1>
                <input name='username' onChange={inputChange} className='p-2 rounded-md mb-10' placeholder='Enter your name' type="text" />
                <input name='pass' onChange={inputChange} className='p-2 rounded-md mb-10' placeholder='Enter your password' type="password" />
                <input type="submit" value="Login" className='bg-red-600 mb-5 text-white border-none px-5 py-1 rounded-sm' />
                <Link to="/register">Don't you have account?</Link>
            </form>
        </div>
    )
}

export default Login