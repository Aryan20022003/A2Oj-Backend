import React, { useState } from 'react';
import './navbar.css'
import logo from './../../../src/assets/logo/crop-light.png'


const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <div className="navpage">
            <nav className="navbox">
                <img src={logo} alt="" />
                <div className="links-list">

                    <li className="list-items">About</li>
                    <li className="list-items">Prizes</li>
                    <li className="list-items">Schedule</li>
                    <li className="list-items">Our Team</li>
                    <li className="list-items">Testimonials</li>
                    <li className="list-items">Contact Us</li>
                </div>
            </nav>

            <nav className="mobile-nav">
                <img src={logo} alt="Logo" />
                <i
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className={!menu ? "fas fa-bars" : "far fa-times-circle text-3xl"}
                />
            </nav>

            <div className={!menu ? "mobile-list" : "mobile-list is-active"}>
                <li
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className="list-items"
                >
                    About
                </li>
                <li
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className="list-items"
                >
                    Prizes
                </li>
                <li
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className="list-items"
                >
                    Schedule
                </li>
                <li
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className="list-items"
                >
                    Mentors
                </li>
                <li
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className="list-items"
                >
                    Sponsors
                </li>
                <li
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className="list-items"
                >
                    FAQs
                </li>
                <li
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className="list-items"
                >
                    Contact Us
                </li>
            </div>
        </div>
    );
    // return (
    //     <nav>
    //         <div className="nav_left">
    //             <img className='nav_logo' src={logo} alt="" />
    //         </div>
    //         <i className="nav_icon fa-solid fa-bars" />
    //         <ul className="nav_right nav-active">
    //             <li className='nav_item'>About</li>
    //             <li className='nav_item'>Prizes</li>
    //             <li className='nav_item'>Schedule</li>
    //             <li className='nav_item'>Mentors</li>
    //             <li className='nav_item'>Sponsors</li>
    //             <li className='nav_item'>FAQs</li>
    //             <li className='nav_item'>Contact Us</li>
    //         </ul>
    //     </nav>
    // );
}

export default Navbar;