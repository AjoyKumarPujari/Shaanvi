import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "../Mastersuite/MastersuiteIndormation.css"
import standardroomswb from '../StandardRoomsWB/Standardroomwithbalcony.JPG'
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



const StandardRoomswb = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
            <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
                <div className='RoomsInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
                    <div className='RoomsLeft  flex justify-center rounded-lg  '>
                                <img
                                    src={standardroomswb}
                                    alt=""
                                    className='shadow-white rounded-lg'
                                    height='100%'
                                    width='100%'
                                
                                />
                    </div>
                    <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                        {/* <Heading text={"Outdoor Camping"}/>  */}
                        <div className='campingheading mt-10'>
                        <RoomsHeading text={"Standard Room With Balcony (3 nos.)  "} />               
                        <RoomsParagraph text={"Price : 2800/- ( Complimentary breakfast )"}/>
                        <RoomsParagraph text={"Our standard room has 1 Double bed, 1 LED TV, 1 wardrob, 1 luggage box, 1 dressing mirror with shelf, 1 private balcony. It is spacious and the balcony faces towards our farmlands which gives a mesmerizing view throughout the day."}/>
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

export default StandardRoomswb