import React from 'react'
import Crousal from './Crousal'
import Navbar from '../components/core/Homepage/Navbar'
import AboutUs from '../components/core/Homepage/AboutUs'


 const Home = () => {
  return (
    <div>
       { /*Section 1*/}
        <Navbar/>
        <Crousal/>

       { /*Section 2*/}
       <div className='bg-pure-greys-5 txt-richblack-700  '>
        <div className='homepage_bg h-[727px] bg-no-repeat bg-center backdrop-blur-md'>
            <AboutUs/>
        </div>
       
       </div>
       

       { /*Section 3*/}
       
       { /*Section 4*/}

       { /*Section 5*/}

       { /*Section 6*/}
       
       { /*Footer 6*/}
    </div>
  )
}
export default Home