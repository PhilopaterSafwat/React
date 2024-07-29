import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [open, setopen] = useState("false")
    function toggleMenu(){
        setopen(!open)
    }
    return <>
        <nav className='nav text-white py-8 px-8 lg:px-32 fixed top-0 inset-x-0 z-50 '>
            <div className="container flex justify-between items-start md:items-center flex-col md:flex-row gap-5">
                <div className='flex items-center justify-between w-full'>
                    <h1 className='text-4xl font-bold'><Link to="">START FRAMEWORK</Link></h1>
                    <div className="bar md:hidden cursor-pointer text-3xl" onClick={()=>toggleMenu()}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <ul className={`gap-5 font-bold flex-col md:flex-row ${open ? 'flex' : 'hidden'} md:flex`}>
                    <li><NavLink to="about" className="p-2 rounded-md">ABOUT</NavLink></li>
                    <li><NavLink to="protfolio" className="p-2 rounded-md">PORTFOLIO</NavLink></li>
                    <li><NavLink to="contact" className="p-2 rounded-md">CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>
    </>
}
