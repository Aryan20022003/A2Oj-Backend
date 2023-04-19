import React, { useState } from "react";
import logo from "./../../../src/assets/logo/logo-light.png";
import "./../../App.css";
import "./navbar.css";
import { Nav, NavLink, useParams } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const tmp = useParams();
  // console.log("UseParams",tmp);

  return (

    
    <>
      <nav
        className="navbar"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="nav_wrapper">
          <div className="logo">
            <NavLink to="/home"><img  src={logo} alt="" /></NavLink>
          </div>
          <div className="nav_menu">
            <ul className="nav_menu_list">
              <li className="nav_menu_item">
                <NavLink
                  to="/home"
                  //   activeClassName="activeLink"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav_menu_item">
                <NavLink
                  to="/a2oj"
                  //   activeClassName="activeLink"
                >
                  A2OJ
                </NavLink>
              </li>
              <li className="nav_menu_item">
                <NavLink
                  to="/leaderboard"
                  //   activeClassName="activeLink"
                >
                  Leaderboard
                </NavLink>
              </li>
              <li className="nav_menu_item">
                <NavLink
                  to="/roadmap"
                  //   activeClassName="activeLink"
                >
                  Roadmap
                </NavLink>
              </li>
              <li className="nav_menu_item">
                <NavLink
                  to="/code-editor"
                  //   activeClassName="activeLink"
                >
                  Code Editor
                </NavLink>
              </li>
              <li className="nav_menu_item">
                <NavLink
                  to="/about"
                  //   activeClassName="activeLink"
                >
                  About
                </NavLink>
              </li>
            </ul>
            <i
              onClick={handleMenu}
              className={`nav_menu_icon fa-solid fa-bars`}
            />
          </div>
        </div>
      </nav>

      <ul className={menu ? "nav_mobile" : "nav_mobile mobile_active"}>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            // style={(isActive) => ({
            //   color: isActive ? "green" : "blue",
            // })}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            // style={(isActive) => ({
            //   color: isActive ? "green" : "blue",
            // })}
            to="/a2oj"
          >
            A2OJ
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            // style={(isActive) => ({
            //   color: isActive ? "green" : "blue",
            // })}
            to="/leaderboard"
          >
            Leaderboard
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            // style={(isActive) => ({
            //   color: isActive ? "green" : "blue",
            // })}
            to="/roadmap"
          >
            Roadmap
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            // style={(isActive) => ({
            //   color: isActive ? "green" : "blue",
            // })}
            to="/code-editor"
          >
            Code Editor
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            // style={(isActive) => ({
            //   color: isActive ? "green" : "blue",
            // })}
            to="/about"
          >
            About
          </NavLink>
        </li>
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
};

export default Navbar;
