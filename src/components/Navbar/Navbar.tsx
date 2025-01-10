// import React from 'react'

import searchicon from '../../assets/search_icon.svg'
import notification from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import {useState} from 'react'
import cartocon from '../../assets/caret_icon.svg'
function Navbar() {
    const [states,setstate]=useState(false)
    const dropdown=()=>{    
        setstate(!states)
    }
    return (
        <nav className='fixed left-0 top-0 w-full flex justify-between lg:px-10 sm:px-10 sm:py-5 z-30'>
            {/* left side */}
            <div className='flex'>
                <img className="w-25 h-10" src="/logo.png" alt="" />
                <ul className='list-none hover:cursor-pointer flex justify-between space-x-6' >
                    <li className='text-white  hover:text-blue-800'>Home</li>
                    <li className='text-white  hover:text-blue-800'>Tv Shows</li>
                    <li className='text-white  hover:text-blue-800'>Movies</li>
                    <li className='text-white  hover:text-blue-800'>New & Popular</li>
                    <li className='text-white  hover:text-blue-800'>Home</li>
                </ul>

            </div>
            {/* right side  */}
            <div className='flex space-x-5 mr-16 items-center relative'>
                <div className='space-x-3 '>
                    <img className='text-gray-900 w-6 h-6' src={searchicon} alt="search" />
                    <img src={notification} className='w-6 h-6' alt="notification" /></div>
                <div className='space-x-5 items-center flex justify-center '>
                    <img className='rounded-full h-10 w-10' src={profile} alt="Profile" />
                    <img src={cartocon} onClick={dropdown} className="w-4 " alt="cart icon" />
                   {states&&( <div className="absolute right-0 z-50 top-8 mt-5 bg-slate-600 rounded-lg  p-4  ">
                    <button onClick={()=>{console.log("poda myre")}} className="bg-transparent border-transparent text-black  hover:text-blue-500">Signout</button>

                    </div>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
