import React from 'react'
import Crousal from './Crousal'
import '../../src/components/core/Homepage/mediaquery.css'
import Navbar from '../components/core/Homepage/Navbar/Navbar'
import AboutUs from '../components/core/Homepage/AboutSaanvi/AboutUs'
import Features from '../components/core/Homepage/Features'
import SubHeading from '../components/core/Homepage/SubHeading'
import FeaturesCamping from '../components/core/Homepage/FeaturesCamping'
import ServicesSightseeing from '../components/core/Homepage/ServicesSightseeing'
import ServiceFirmStay from '../components/core/Homepage/ServiceFirmStay'
import Rooms from '../components/core/Homepage/Rooms'
import FooterMain from '../components/core/Homepage/FooterMain'
 const Home = () => {
  return (
    <div>
       { /*Section 1*/}
        <Navbar/>
        <Crousal/>

       { /*Section 2*/}
       <div className='bg-pure--5 txt-richblack-700 justify-center items-center  '>
          <div className='homepage_bg h-[727px] bg-no-repeat bg-center backdrop-blur-md'>
              <AboutUs/>
          </div>
       </div>
       <div className='bg-pure-greys-5 txt-richblack-700 flex flex-col justify-center items-center '>
          <div className='Ourservices mt-10'>
            <SubHeading text={"Our Services"} />
          </div>

          <div className='FeaturesDetails flex flex-col justify-center items-center gap-5 mx-auto'>
            <div className='flex flex-wrap gap-8 mt-10 justify-center items-center'>
              <Features className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4' />
              <FeaturesCamping className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4' />
              <ServicesSightseeing className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4' />
              <ServiceFirmStay className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4' />
            </div>
          </div>
      </div>

       

       <div className='bg-pure-greys-5 txt-richblack-700 flex flex-col justify-center items-center '>
              <div className='Ourservices flex flex-wrap justify-center items-center mt-10'>
                <SubHeading text={"Our Rooms"}/>
              </div> 
              
              <div className='FeaturesDetails flex flex-col justify-center items-center gap-5 mx-auto'>
                <div className='flex flex-wrap gap-7 gap-8 mt-8 justify-center items-center'>

                  
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  
                </div>
                <div className='flex flex-wrap gap-7 gap-8 mt-8 justify-center items-center'>

                  
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  
                </div>
                <div className='flex flex-wrap gap-7 gap-8 mt-8 justify-center items-center'>

                  
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  <Rooms className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'/>
                  
                </div>
            </div>
       </div>
       
       { /*Section 4*/}
       <div className='bg-pure-greys-5 txt-richblack-700'>
      <div className='container-fluid bg-pure-greys-5 txt-richblack-700' style={{ overflowX: 'auto' }}>
        <div className='row justify-content-center'>
          <div className='col'>
            <div className='Ourservices text-center mt-10'>
              {/* <SubHeading text={"Gallery"}/> */}
            </div>
          </div>
        </div>

        <div className='row justify-content-center bg-pure-greys-5 txt-richblack-700'>
          <div className='col bg-pure-greys-5 txt-richblack-700'>
            <div className='FeaturesDetails d-flex justify-content-center bg-pure-greys-5 txt-richblack-700'>
              
            </div>
          </div>
        </div>
      </div>
       </div>





       { /*Section 5*/}
       <div className='bg-pure-greys-5 txt-richblack-700  '>
         
          <FooterMain/>
       </div>
       { /*Section 6*/}
       
       { /*Footer 6*/}
    </div>
  )
}
export default Home