// Footer.js

import React from 'react';
import Heading from './Heading'
import SubHeading from './SubHeading';
import Logo from '../../../assets/Logo.png'
import { FaFacebook , FaInstagram, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer w-[100%] h-[400px] flex  justify-center items-center bg-pure-greys-5 txt-richblack-700">
        <div className="container w-[100%] h-[400px]">
            <div className="footer-content flex justify-center items-center ">
            
                <div className='flex justify-center items-center'>
                        <div className='w-[max] h-[max] flex justify-center items-center '>
                            <img
                                src={Logo}
                                alt=""
                                className='shadow-white'
                                height=''
                                width=''
                            />
                        </div>
                        <div className='w-[max] h-[max] flex justify-center items-center '>
                            <Heading text={"Saanvi Royal Club"}/>
                        </div>
                </div>



            
                <div className='FooterLinks flex flex-col w-[30%] h-[400px] items-center'>
                    <div className="footer-links">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li><a href="#rooms">Rooms</a></li>
                        <li><a href="#amenities">Amenities</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div>

            
                <div className='SocialLinks flex flex-col w-[30%] h-[400px] items-center'>
                    <div className="footer-social">
                        <SubHeading text={"Connect with us"}/> 
                        <div className="social-icons">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                             <FaFacebook/>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                             <FaInstagram/>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                             <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>


                
            </div>


        </div>
        
      
    </footer>
  );
};

export default Footer;
