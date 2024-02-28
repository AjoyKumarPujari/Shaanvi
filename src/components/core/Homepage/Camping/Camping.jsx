
import React from 'react'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import Description from '../Description'
import Campingimage from '../../../../assets/Camping11.JPG'
import Navbar from '../Navbar/Navbar'
import "../../Homepage/Camping/Camping.css"
import FooterMain from '../FooterMain'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const Camping = () => {
  return (
    <div>
    <ScrollToTop/>
    <Navbar/>
    <div className='Camping-bg  flex bg-no-repeat  backdrop-blur-md'>
    <div className='CampingInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='CampingInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
            
        
            <div className='CampingLeft  flex justify-center rounded-lg  '>
                            <img
                                src={Campingimage}
                                alt=""
                                className='shadow-white rounded-lg'
                                height='100%'
                                width='100%'
                               
                            />

            </div>

            
            <div className='CampingRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                {/* <Heading text={"Outdoor Camping"}/>  */}
                <div className='campingheading mt-10'>
                <SubHeading text={"Outdoor Camping"} />
                </div>
                
                <Heading text={"Nestled in the heart of nature, our camp offers not just a  place to stay, but a canvas for unforgettable campaigns and enchanting bonfires beneath the vast , starlit sky."}/>                
                <Heading text={"Dome tents for 2 Persons @1800/- ( Complimentary Bonfire will be provided. Additional Firewood chargeable.)"}/>
                
            </div>
        
        </div>
    </div>
    </div>
    <FooterMain/>
    </div>
  )
}

export default Camping