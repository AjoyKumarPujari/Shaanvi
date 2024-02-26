import React from 'react'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import mastersuit from '../../../../assets/Mastersuiteroom.JPG'
import executivesuite from '../../../../assets/Executivesuites.JPG'
import executivesuiteIII from './ExecutiveJuniorSuite/Juniorexecutivesuiteroom.jpeg'
import StandardRooms from '../Rooms/StandardRooms/Standardroomwithoutbalcony.JPG'
import StandardRoomswb from './StandardRoomsWB/Standardroomwithbalcony.JPG'
import Navbar from '../Navbar/Navbar'
import Description from '../Description'
import Paragraph from '../Paragraph'
import FooterMain from '../FooterMain'
import "../../Homepage/Rooms/RoomsInformation.css"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const RoomsInformation = () => {
  return (
     
    <div>
    <ScrollToTop />
    <Navbar/>
    <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>  
        <div className='RoomsInfoMain w-[80%]  flex gap-10 mt-10 flex justify-center items-center'>
            <div className='RoomsLeft  flex justify-center rounded-lg  '>
                            <img
                                src={mastersuit}
                                alt=""
                                className='shadow-white rounded-lg'
                                height='100%'
                                width='100%'
                               
                            />

            </div>
            <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                {/* <Heading text={"Outdoor Camping"}/>  */}
                <div className='campingheading mt-10'>
                <Heading text={"Master suite"} />               
                <Paragraph text={"Price : 5000/- ( Complimentary breakfast )"}/>
                <Paragraph text={"Our Presidential Master Suite room is created with extra specious area accommodating two double beds can comfortably sleep up to four individuals, making them an ideal choice for families or groupes of friends travelling together."}/>
                <Paragraph text={"( Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress )"}/>
                </div>
            </div>
        </div>
    </div>

    </div>

    <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>       
        <div className='RoomsInfoMain w-[80%]  flex gap-10 mt-10 flex justify-center items-center'>
            <div className='RoomsLeft  flex justify-center rounded-lg  '>
                                <img
                                    src={executivesuite}
                                    alt=""
                                    className='shadow-white rounded-lg'
                                    height='100%'
                                    width='100%'
                                
                                />

            </div>
            <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                    {/* <Heading text={"Outdoor Camping"}/>  */}
                    <div className='campingheading mt-10'>
                    <Heading text={"Executive suite (2 nos.)"} />               
                    <Paragraph text={"Price : 4000/- ( Complimentary breakfast )"}/>
                    <Paragraph text={"This Suite room has one Double bed and one Single bed which can accommodate upto 3 adults and 1 single. It is truly specious covering a coffee table and a private dinning space. Alongeith that it has large open balconies which cover both the firm view and front view of village ponds. This rooms provides a scenic view of the periphery of the resort."}/>
                    <Paragraph text={"Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress."}/>
                            
                    </div>
            </div>
        </div>
    </div>
    </div>

    <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='RoomsInfoMain w-[80%]  flex gap-10 mt-10 flex justify-center items-center'>
          
            <div className='RoomsLeft  flex justify-center rounded-lg  '>
                            <img
                                src={executivesuiteIII}
                                alt=""
                                className='shadow-white rounded-lg'
                                height='100%'
                                width='100%'
                               
                            />

            </div>
            <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                {/* <Heading text={"Outdoor Camping"}/>  */}
                <div className='campingheading mt-10'>
                <Heading text={"Executive Junior Suite "} />               
                <Paragraph text={"Price : 5000/- ( Complimentary breakfast )"}/>
                <Paragraph text={"This room has super King size bed which can accommodate 2 adults and 1 children comfortably. It has a coffee table with 2 sofa chairs, smart TV, private dining area with full size miror and wardrobs. It has a large specious balcony which faces towards the backyard of Pobitora wildlife sanctury. If you are lucky enough, you may get a glimpse of our state pride One Horned Rhinoceros"}/>
                <Paragraph text={" ( Rs. 700 charged for extra mattress )"}/>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='RoomsInfoMain w-[80%]  flex gap-10 mt-10 flex justify-center items-center'>
          
            <div className='RoomsLeft  flex justify-center rounded-lg  '>
                            <img
                                src={StandardRoomswb}
                                alt=""
                                className='shadow-white rounded-lg'
                                height='100%'
                                width='100%'
                               
                            />

            </div>
            <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                {/* <Heading text={"Outdoor Camping"}/>  */}
                <div className='campingheading mt-10'>
                <Heading text={"Standard Room With Balcony (3 nos.)  "} />               
                <Paragraph text={"Price : 2800/- ( Complimentary breakfast )"}/>
                <Paragraph text={"Our standard room has 1 Double bed, 1 LED TV, 1 wardrob, 1 luggage box, 1 dressing mirror with shelf, 1 private balcony. It is spacious and the balcony faces towards our farmlands which gives a mesmerizing view throughout the day."}/>
                <Paragraph text={"( Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress )"}/>
                       
                </div>
            </div>
        </div>
    </div>
    </div>

    <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='RoomsInfoMain w-[80%]  flex gap-10 mt-10 flex justify-center items-center'>
          
            <div className='RoomsLeft  flex justify-center rounded-lg  '>
                            <img
                                src={StandardRooms}
                                alt=""
                                className='shadow-white rounded-lg'
                                height='100%'
                                width='100%'
                               
                            />

            </div>
            <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                {/* <Heading text={"Outdoor Camping"}/>  */}
                <div className='campingheading mt-10'>
                <Heading text={"Standard Rooms (3 nos.)"} />               
                        <Paragraph text={"Price : 2500/- ( Complimentary breakfast )"}/>
                        <Paragraph text={"One standard room has 1 Double bed, 1 LED Tv, 1 wardrobe, 1 liggage box, 1 dressing mirror with shelf and attached bathroom with intercom facilities. It is best for small family and travellers"}/>
                        <Paragraph text={"( Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress )"}/>
                               
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='bg-pure-greys-5 txt-richblack-700  '>     
          <FooterMain/>
    </div>
    </div>
    
  )
}

export default RoomsInformation