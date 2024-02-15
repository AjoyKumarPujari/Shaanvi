import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import HightLightText from '../components/core/Homepage/HightLightText';
import Paragraph from '../components/core/Homepage/Paragraph';
import './Crousal.css';
import CrousalHeading from './CrousalHeading';
import CrousalSubheadingz from './CrousalSubheadingz';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import { useState } from 'react';
function Crousal() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div className='w-screen bg-richblack-100 flex flex-col font-inter relative'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img style={{height:'90vh'}}
      className='d-block w-100'
      src={Image1}
      alt="First Slide"
      />
     
      <Carousel.Caption>

    <div className='text-center text-7xl  font-small absolute bottom-60 left-0 right-0 px-2 py-20 flex  justify-center items-center'>
          
      <CrousalSubheadingz text={"Unveil the elegance of "}/>
      <CrousalHeading text={"Saanvi Royal Club"}/>
          
    </div>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:'90vh'}}
      className='d-block w-100'
      src={Image2}
      alt="Second Slide"
      />
     <Carousel.Caption>

<div className='text-center text-7xl  font-small absolute bottom-60 left-0 right-0 px-2 py-20 justify-center items-center'>
 
  <CrousalSubheadingz text={"Unveil the elegance of "}/>
  <CrousalHeading text={"Saanvi Royal Club"}/>
 
</div>
  
</Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:'90vh'}}
      className='d-block w-100'
      src={Image3}
      alt="Third Slide"
      />
      <Carousel.Caption>

<div className='text-center text-7xl  font-small absolute bottom-60 left-0 right-0 px-2 py-20 '>
  <CrousalSubheadingz text={"Unveil the elegance of "}/>
  <CrousalHeading text={"Saanvi Royal Club"}/>
 
</div>
  
</Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  </div> 
  )
}
export default Crousal