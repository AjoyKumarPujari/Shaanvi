import React, { useState } from 'react'
import Logo from '../../../../assets/Logo.png'
import "../Navbar/Navbar.css"
import { GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons ] = useState(false);
  return (
    <nav className="main-nav">
      <div className= { showMediaIcons ? "nav-left mobile-menu-link" :"nav-left" } >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
          <a href="#">About</a>
          </li>
          <li>
          <a href="#">Rooms</a>
          </li>
          <li>
          <a href="../">Restaurants</a>
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