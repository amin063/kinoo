import React, { useState } from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Sidebar from './sidebar/Sidebar'
import ListBtn from '../components/buttons/ListBtn'

function UserLayout() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            {isSideBarOpen && <Sidebar />}
            <main className="flex-grow">
                <Outlet />
            </main>
            <ListBtn isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
            <Footer />
        </div>
    )
}

export default UserLayout