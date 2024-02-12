import React from 'react'
import Navbar from '../Navbar/Navbar'
import AboutUs from '../AboutUs'
import FooterMain from '../FooterMain'

const AboutSaanvi = () => {
  return (
    <div>
        <Navbar/>
        <div className='AboutSaanvi mb-10'>
             <AboutUs/>
        </div>
       
        <FooterMain/>
    </div>
  )
}

export default AboutSaanvi