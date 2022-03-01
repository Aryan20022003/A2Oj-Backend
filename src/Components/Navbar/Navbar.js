import React, { useState } from 'react';
import logo from './../../../src/assets/logo/logo-light.png'
import "./../../App.css"
import "./navbar.css"

const Navbar = () => {

    const [menu, setMenu] = useState(true);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
            <nav className='navbar'>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav_menu">
                        <ul className='nav_menu_list'>
                            <li className='nav_menu_item'>About</li>
                            <li className='nav_menu_item'>Prizes</li>
                            <li className='nav_menu_item'>Schedule</li>
                            <li className='nav_menu_item'>Sessions</li>
                            <li className='nav_menu_item'>Mentors</li>
                            <li className='nav_menu_item'>Sponsors</li>
                            <li className='nav_menu_item'>FAQs</li>
                            <li className='nav_menu_item'>Contact Us</li>
                        </ul>
                        <i onClick={handleMenu} className={`nav_menu_icon fa-solid fa-bars`} />
                    </div>
                </div>
            </nav>

            <ul className={menu ? 'nav_mobile' : 'nav_mobile mobile_active'}>
                <li className='mobile_menu_item'>About</li>
                <li className='mobile_menu_item'>Prizes</li>
                <li className='mobile_menu_item'>Schedule</li>
                <li className='mobile_menu_item'>Sessions</li>
                <li className='mobile_menu_item'>Mentors</li>
                <li className='mobile_menu_item'>Sponsors</li>
                <li className='mobile_menu_item'>FAQs</li>
                <li className='mobile_menu_item'>Contact Us</li>
            </ul>
        </>
























        // <div className='nav-wrapper'>
        //     <nav className="hidden lg:flex items-center justify-between">
        //         <img className='md:h-28 lg:h-28' src={logo} alt="DCC Logo" />
        //         <ul className='text-white z-10 flex md:text-base lg:text-lg justify-around '>
        //             <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110 font-primary'>About</li>
        //             <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110 font-primary'>Prizes</li>
        //             <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110 font-primary'>Schedule</li>
        //             <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110 font-primary'>Sessions</li>
        //             <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110 font-primary'>Mentors</li>
        //             <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110 font-primary'>Sponsors</li>
        //             <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110 font-primary'>FAQs</li>
        //             <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110 font-primary'>Contact Us</li>
        //         </ul>
        //     </nav>

        //     <nav className='lg:hidden flex justify-between mx-3 text-white items-center'>
        //         <img className='h-20 sm:h-28' src={logo} alt="DCC Logo" />

        //         <div className=' m-0 z-10' onClick={() => setMenu(!menu)}>
        //             <i className={!menu ? 'fas fa-globe-asia text-3xl' : 'far fa-times-circle text-3xl'} />
        //         </div>
        //     </nav>

        //     <div className={!menu ? 'hidden' : 'z-10'}>
        //         <ul className='text-white text-center font-mono text-sm'>
        //             <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white border-t'>About</li>
        //             <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Prizes</li>
        //             <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Schedule</li>
        //             <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Sessions</li>
        //             <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Mentors</li>
        //             <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Sponsors</li>
        //             <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>FAQs</li>
        //             <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Contact Us</li>
        //         </ul>
        //     </div>
        // </div>
    );
}

export default Navbar;