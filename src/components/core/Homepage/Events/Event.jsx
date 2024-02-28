import React from 'react'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import Description from '../Description'
import Campingimage from '../../../../assets/Camping11.JPG'
import Navbar from '../Navbar/Navbar'
import "../Events/Event.css"
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
const Event = () => {
  return (
    <div>
    <ScrollToTop />
    <Navbar/>
    <div className='Event-bg  flex bg-no-repeat  backdrop-blur-md'>
    <div className='EventInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='EventInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
            
        
            <div className='EventLeft  flex justify-center rounded-lg  '>
                            <img
                                src={Campingimage}
                                alt=""
                                className='shadow-white rounded-lg'
                                height='100%'
                                width='100%'
                               
                            />

            </div>

            
            <div className='EventRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                {/* <Heading text={"Outdoor Camping"}/>  */}
                <div className='campingheading mt-10'>
                <SubHeading text={"Events at Saanvi"} />
                </div>              
                <Heading text={"Give a new dimension to your small corporate seminar /Birthday parties/Engagement events at the 35 40 pax Saanvi Royal Hall For the hush hush, high intensity brainstorming sessions, there is also a attached open sitting area on offer with cosy sofas/chairs for interactions The Saanvi Royal Hall also paves theway for organising unforgettable small sweet occasions Our attention to detail unmatched catering services are the icing on the cake For guest lists that run into hundreds we have the outdoor area with a sprawling green lawn With cool open air a star lit sky, weddings here are surely what dreams are made of."}/>
                
            </div>
        
        </div>
    </div>
    </div>
    <FooterMain/>
    </div>
  )
}

export default Event