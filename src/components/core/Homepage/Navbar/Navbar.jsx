import React, { useState } from 'react'
import Logo from '../../../../assets/Logo.png'
import "../Navbar/Navbar.css"
import { GiHamburgerMenu} from "react-icons/gi"
import {Route, Routes, Link} from "react-router-dom"
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons ] = useState(false);
  return (
    <nav className="main-nav">
      <div className= { showMediaIcons ? "nav-left mobile-menu-link" :"nav-left" } >
        <ul>
          <li>
          <Link to="/">Home</Link>
            
          </li>
          <li>
          <Link to="/AboutSaanvi">About</Link>
          
          </li>
          <li>
          <Link to="/Rooms">Rooms</Link>
          </li>
          <li>
          <Link to="/Resturent">Resturent</Link>
          </li>
        </ul>

      </div>
     
      <div className='logo  flex justify-center items-center '>
                            <img
                                src={Logo}
                                alt=""
                                className='shadow-white'
                                height=''
                                width=''
                            />


                        </div>

      <div className="nav-right">
        <ul>
            <li>
            <a href="#">Package</a>
            </li>
            <li>
            <a href="#">Events</a>
            </li>
            <li>
            <a href="#">Gallery</a>
            </li>
            <li>
            <a href="#">Contacts</a>
            </li>
          </ul>

          
      </div>
      <div className="hamburger-menu">
             <a href="#" onClick={( ) => setShowMediaIcons(!showMediaIcons)}>
             <GiHamburgerMenu /> 
             </a> 
          </div>
    </nav>
  )
}

export default Navbar