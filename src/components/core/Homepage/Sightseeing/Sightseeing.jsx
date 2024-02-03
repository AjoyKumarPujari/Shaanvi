import React from 'react'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import Description from '../Description'
import SightseeingImg from '../../../../assets/SightseeingInfo.JPG'
import Navbar from '../Navbar/Navbar'
import "../../Homepage/Sightseeing/Sightseeing.css"
function Sightseeing() {
  return (
    <div>
    <Navbar/>
    <div className='homepage_bg  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='Sightseeing w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='SightseeingMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
            
        
            <div className='SightseeingLeft  flex justify-center rounded-lg  '>
                            <img
                                src={SightseeingImg}
                                alt=""
                                className='shadow-white rounded-lg'
                                height='100%'
                                width='100%'
                               
                            />

            </div>

            
            <div className='SightseeingRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                <SubHeading text={"Mayong SightSeeing"}/> 
                <Heading text={"Trial Pack 1"}/>
                <Description text={"Day1: Pobitora Visit Wildlife Sanctuary with maximum One horned R hinocerous population(Booking can be done from resort)"}/>               
                <Heading text={"Trial Pack 2"}/>
                <Description text={"Day 1: Visit to kachashila hill to witness the big sized stone image of lord Ganesha about 101 feet high Day 2: Visit to Mayong Museum"}/>               
                <Description text={"(Travel arrangement with Guide Facility will be provided by resort management For Package details ,contact @9859471993 We also arrange Airport Pickup and drop facility."}/>               

            </div>
        
        </div>
    </div>
    </div>
   
    </div>
  )
}

export default Sightseeing