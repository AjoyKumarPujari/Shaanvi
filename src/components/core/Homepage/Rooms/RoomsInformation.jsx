import React from 'react'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import mastersuit from '../../../../assets/Mastersuiteroom.JPG'
import executivesuite from '../../../../assets/Executivesuites.JPG'
import executivesuiteIII from '../../../../assets/ExecutiveroomsIII.JPG'
import Navbar from '../Navbar/Navbar'
import Description from '../Description'
import Paragraph from '../Paragraph'
import FooterMain from '../FooterMain'
import "../../Homepage/Rooms/RoomsInformation.css"
const RoomsInformation = () => {
  return (
    <div>
    <Navbar/>
    <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='RoomsInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
            
        
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
                <Heading text={"Master suite I"} />
                </div>
                
                <Heading text={"Quad room or 2 Double bedded room"}/>                
                <Paragraph text={"Price : 5000/- ( Complimentary breakfast )"}/>
                <Paragraph text={"Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress."}/>
                
            </div>
        </div>
    </div>
    </div>
    <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='RoomsInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
            
        
           

            
            <div className='RoomsRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                {/* <Heading text={"Outdoor Camping"}/>  */}
                <div className='campingheading mt-10'>
                <Heading text={"Executive suit II"} />
                </div>
                
                <Heading text={"1 Double and 1 single bedded room"}/>                
                <Paragraph text={"Price : 4000/- ( Complimentary breakfast )"}/>
                <Paragraph text={"Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress."}/>
                
            </div>
            <div className='RoomsLeft  flex justify-center rounded-lg  '>
                            <img
                                src={executivesuite}
                                alt=""
                                className='shadow-white rounded-lg'
                                height='100%'
                                width='100%'
                               
                            />

            </div>
        
        </div>
    </div>
    </div>
    <div className='  flex bg-no-repeat bg-center backdrop-blur-md'>
    <div className='RoomsInfoMaindiv w-[100%]  flex flex-row justify-center items-center'>
        
        <div className='RoomsInfoMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
          
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
                <Heading text={"Executive suite III"} />
                </div>
                
                <Heading text={"1 Double and 1 single bedded room"}/>                
                <Paragraph text={"Price : 4000/- ( Complimentary breakfast )"}/>
                <Paragraph text={"Complimentary stay for children aged between 0 to 7 years, Rs. 700 charged for extra mattress."}/>
                
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