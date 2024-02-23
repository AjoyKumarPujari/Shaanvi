import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "../StandardRooms/Standardrooms.css"
import standardroom from '../StandardRooms/Standardroomwithoutbalcony.JPG'
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

const StandardRooms = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
            <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
                <div className='RoomsInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
                    <div className='RoomsLeft  flex justify-center rounded-lg  '>
                                <img
                                    src={standardroom}
                                    alt=""
                                    className='shadow-white rounded-lg'
                                    height='100%'
                                    width='100%'
                                
                                />
                    </div>
                    <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                        {/* <Heading text={"Outdoor Camping"}/>  */}
                        <div className='campingheading mt-10'>
                        <RoomsHeading text={"Standard Rooms (3 nos.)"} />               
                        <RoomsParagraph text={"Price : 2500/- ( Complimentary breakfast )"}/>
                        <RoomsParagraph text={"One standard room has 1 Double bed, 1 LED Tv, 1 wardrobe, 1 liggage box, 1 dressing mirror with shelf and attached bathroom with intercom facilities. It is best for small family and travellers"}/>
                        <RoomsParagraph text={"( Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress )"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterMain/>
    </div>
  )
}

export default StandardRooms