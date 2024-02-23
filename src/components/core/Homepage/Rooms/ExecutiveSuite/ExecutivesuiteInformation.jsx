import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "../ExecutiveSuite/Executivesuiteinformation.css"
import ExecutiveSuite from '../ExecutiveSuite/Executivesuites.JPG'
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
const ExecutivesuiteInformation = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
            <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
                <div className='RoomsInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
                    <div className='RoomsLeft  flex justify-center rounded-lg  '>
                                <img
                                    src={ExecutiveSuite}
                                    alt=""
                                    className='shadow-white rounded-lg'
                                    height='100%'
                                    width='100%'
                                
                                />
                    </div>
                    <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                        {/* <Heading text={"Outdoor Camping"}/>  */}
                        <div className='campingheading mt-10'>
                        <RoomsHeading text={"Executive suite (2 nos.)"} />               
                        <RoomsParagraph text={"Price : 4000/- ( Complimentary breakfast )"}/>
                        <RoomsParagraph text={"This Suite room has one Double bed and one Single bed which can accommodate upto 3 adults and 1 single. It is truly specious covering a coffee table and a private dinning space. Alongeith that it has large open balconies which cover both the firm view and front view of village ponds. This rooms provides a scenic view of the periphery of the resort."}/>
                        <RoomsParagraph text={"Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress."}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterMain/>
    </div>
  )
}

export default ExecutivesuiteInformation