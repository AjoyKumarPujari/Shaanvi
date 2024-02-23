

import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "../Mastersuite/MastersuiteIndormation.css"
import executivejuniorsuit from '../ExecutiveJuniorSuite/Juniorexecutivesuiteroom.jpeg'
import RoomsHeading from '../RoomsHeading'
import RoomsParagraph from '../RoomsParagraph'
import FooterMain from '../../FooterMain'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



const ExecutiveJuniorSuiteinformation = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
            <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
                <div className='RoomsInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
                    <div className='RoomsLeft  flex justify-center rounded-lg  '>
                                <img
                                    src={executivejuniorsuit}
                                    alt=""
                                    className='shadow-white rounded-lg'
                                    height='100%'
                                    width='100%'
                                
                                />
                    </div>
                    <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                        {/* <Heading text={"Outdoor Camping"}/>  */}
                        <div className='campingheading mt-10'>
                        <RoomsHeading text={"Executive Junior Suite "} />               
                        <RoomsParagraph text={"Price : 5000/- ( Complimentary breakfast )"}/>
                        <RoomsParagraph text={"This room has super King size bed which can accommodate 2 adults and 1 children comfortably. It has a coffee table with 2 sofa chairs, smart TV, private dining area with full size miror and wardrobs. It has a large specious balcony which faces towards the backyard of Pobitora wildlife sanctury. If you are lucky enough, you may get a glimpse of our state pride One Horned Rhinoceros"}/>
                        <RoomsParagraph text={" ( Rs. 700 charged for extra mattress )"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterMain/>
    </div>
  )
}

export default ExecutiveJuniorSuiteinformation